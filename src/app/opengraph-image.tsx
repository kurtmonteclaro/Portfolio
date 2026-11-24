import { ImageResponse } from 'next/og';

import { portfolio } from '@/data/portfolio';

export const dynamic = 'force-static';
export const alt = `${portfolio.name} — Software Development Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{
      display: 'flex', width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center',
      padding: '85px', backgroundColor: '#101018', color: '#f3f0fa',
      backgroundImage: 'radial-gradient(ellipse at top right, #392752, #101018 68%)',
    }}>
      <div style={{ display: 'flex', color: '#c4adff', fontSize: 30, marginBottom: 26 }}>{portfolio.location}</div>
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 95, fontWeight: 700, lineHeight: 1.06 }}>
        <span>{portfolio.nameLines[0]}</span>
        <span style={{ color: '#c4adff' }}>{portfolio.nameLines[1]}</span>
      </div>
      <div style={{ display: 'flex', color: '#d0cadd', fontSize: 34, marginTop: 31 }}>{portfolio.headline}</div>
    </div>,
    size,
  );
}
