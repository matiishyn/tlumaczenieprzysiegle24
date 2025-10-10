import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const runtime = 'edge';
export const dynamic = 'force-static';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || siteConfig.seo.mainKeyword;
    const description = searchParams.get('description') || 'Profesjonalne tłumaczenia przysięgłe w Krakowie';

    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#10b981',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              TP
            </div>
            <div
              style={{
                color: 'white',
                fontSize: '32px',
                fontWeight: 'bold',
              }}
            >
              {siteConfig.business.name}
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              color: 'white',
              fontSize: '48px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '20px',
              maxWidth: '900px',
              lineHeight: '1.2',
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              color: '#94a3b8',
              fontSize: '24px',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: '1.4',
            }}
          >
            {description}
          </div>

          {/* Location */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              color: '#64748b',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            📍 Kraków, Polska
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
