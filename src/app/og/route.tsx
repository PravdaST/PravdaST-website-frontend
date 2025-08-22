import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Dynamic OG Image Generation
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    const title = searchParams.get('title') || 'Pravda Agency';
    const description = searchParams.get('description') || 'Бизнес инженерство за предсказуем растеж';
    const type = searchParams.get('type') || 'default';
    
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            backgroundImage: 'radial-gradient(circle at 20% 80%, #ECB628 0%, transparent 50%)',
          }}
        >
          {/* Pravda Logo Area */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 40,
            }}
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="45" fill="#ECB628" opacity="0.2" />
              <circle cx="50" cy="50" r="35" fill="#ECB628" opacity="0.3" />
              <circle cx="50" cy="50" r="25" fill="#ECB628" />
              <text
                x="50"
                y="60"
                textAnchor="middle"
                fill="black"
                fontSize="28"
                fontWeight="bold"
              >
                PA
              </text>
            </svg>
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: type === 'blog' ? 48 : 60,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #ECB628 0%, #FFF 50%)',
              backgroundClip: 'text',
              color: 'transparent',
              padding: '0 40px',
              textAlign: 'center',
              maxWidth: '900px',
            }}
          >
            {title}
          </div>
          
          {/* Description */}
          {description && (
            <div
              style={{
                fontSize: 24,
                color: '#888',
                marginTop: 20,
                padding: '0 40px',
                textAlign: 'center',
                maxWidth: '800px',
              }}
            >
              {description}
            </div>
          )}
          
          {/* Brand Bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 5,
              background: '#ECB628',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`Error generating OG image: ${e.message}`);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}