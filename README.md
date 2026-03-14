# abhayparashar.com

Personal portfolio site. Built with Next.js 15, Tailwind CSS, and Framer Motion. Deployed on Vercel at [abhayparashar.com](https://abhayparashar.com).

---

## What's inside

- **Hero** — Intro, availability status, social proof bar
- **About** — Background, photo, currently building
- **CRM Case Study** — Full narrative on PowerCompass (problem → decision → build → outcome), with screenshots
- **Experience** — Tabbed timeline of 5 roles (Charvar Networks, Input Logic, VIU Help Desk, GDSC, A&A Exports)
- **Work** — 3 featured project cards + noteworthy projects grid
- **How I Think** — 3 takes on how I approach engineering
- **Contact** — CTA, social links, resume download
- **AI Chatbot** — Floating widget trained on a full experience bank via Gemini 2.5 Flash API. Answers questions about my background, projects, and availability

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| AI Chatbot | Google Gemini 2.5 Flash |
| Fonts | Outfit + DM Sans (Google Fonts) |
| Deployment | Vercel |
| Domain | Cloudflare → abhayparashar.com |

## Running locally

```bash
git clone https://github.com/AbhayParasharhere/abhay-portfolio.git
cd abhay-portfolio
npm install
```

Create a `.env.local` file in the root:

```env
GEMINI_API_KEY=your_key_here
```

Then:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Chatbot

The `/api/chat` route connects to the Gemini API using a system prompt built on an experience bank document (`experience_bank.txt`). It has:

- 15 message rolling rate limit per session
- 500 character input cap
- Low temperature to prevent hallucination

## License

Code is open source — take inspiration, but don't clone the copy or design wholesale to pass off as your own.

---

Built by [Abhay Parashar](https://abhayparashar.com)
