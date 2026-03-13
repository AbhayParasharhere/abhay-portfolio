import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Abhay Parashar | Full-Stack Engineer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 64,
          background: '#0A1128',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <div
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: '#20C997',
              marginRight: '20px',
            }}
          />
          <span style={{ fontSize: 32, color: '#20C997', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Available for new opportunities
          </span>
        </div>

        <h1 style={{ fontSize: 100, fontWeight: 'bold', margin: '0 0 20px 0', letterSpacing: '-0.02em' }}>
          Abhay Parashar
        </h1>

        <p style={{ fontSize: 48, color: '#94a3b8', margin: '0 0 80px 0' }}>
          Full-Stack Engineer based in Vancouver
        </p>

        <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto', borderTop: '2px solid rgba(255,255,255,0.1)', paddingTop: '40px', width: '100%' }}>
          <span style={{ fontSize: 36, color: '#e2e8f0' }}>abhayparashar.dev</span>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
