import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import path from 'path';

// Simple in-memory rate limiting (Note: resets on Vercel serverless cold starts, which is fine for portfolio MVP)
const RATE_LIMIT = 15;
const rateLimits = new Map<string, { count: number, resetAt: number }>();

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const windowMs = 60 * 60 * 1000; // 1 hour window

    let userLimits = rateLimits.get(ip) || { count: 0, resetAt: now + windowMs };
    if (now > userLimits.resetAt) {
      userLimits = { count: 0, resetAt: now + windowMs };
    }
    
    // Strict rate limit check per handoff constraints
    if (userLimits.count >= RATE_LIMIT) {
      return NextResponse.json({ 
        message: "That's everything I can share here — reach me at abhayparasharr@gmail.com"
      }, { status: 429 });
    }

    const body = await req.json();
    const { messages } = body;
    
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages array." }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];

    if (!lastMessage || typeof lastMessage.content !== 'string' || lastMessage.content.length > 500) {
      return NextResponse.json({ message: "Message is too long. Please keep it under 500 characters." }, { status: 400 });
    }

    // Load the experience bank as the system prompt
    let expBank = '';
    try {
      const expBankPath = path.join(process.cwd(), 'src/app/api/chat/experience_bank.txt');
      expBank = readFileSync(expBankPath, 'utf8');
    } catch(err) {
      // Fallback if file read fails during Vercel edge deployment
      expBank = "Abhay Parashar is a full-stack engineer experienced with Next.js, Django, TypeScript, PostgreSQL, and building performant systems like PowerCompass CRM and Interactive ERD Diagram Tools.";
    }

    userLimits.count += 1;
    rateLimits.set(ip, userLimits);

    const systemInstruction = `You are Abhay Parashar's AI portfolio assistant. You are answering questions on behalf of his experience.
Use his experience bank below as your sole source of truth.
Keep answers very concise, confident, and professional. Do not invent experience not listed in the document.
If asked about something not covered, concisely pivot to something he has built or direct them to his email: abhayparasharr@gmail.com.

EXPERIENCE BANK:
${expBank.substring(0, 30000)} 
`;

    // Map messages to Gemini format
    const contents = messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    // Call Gemini API using native fetch
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined.");
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemInstruction: {
            role: "user",
            parts: [{ text: systemInstruction }]
          },
          contents,
          generationConfig: {
            maxOutputTokens: 300,
            temperature: 0.2, // Keep it highly grounded to the experience bank
          }
        }),
      }
    );

    const data = await response.json();
    
    if (!response.ok) {
      console.error("Gemini API Error:", data);
      return NextResponse.json({ message: "Service temporarily unavailable." }, { status: 500 });
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm having trouble retrieving that information right now.";

    return NextResponse.json({ message: replyText });

  } catch (error) {
    console.error("Chat API error: ", error);
    return NextResponse.json({ message: "An unexpected error occurred." }, { status: 500 });
  }
}
