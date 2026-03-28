import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: 2,
          background: 'transparent',
        }}
      >
        <div style={{ width: 5, height: 10, borderRadius: 2.5, background: '#f472b6' }} />
        <div style={{ width: 5, height: 20, borderRadius: 2.5, background: '#ec4899' }} />
        <div style={{ width: 5, height: 26, borderRadius: 2.5, background: '#db2777' }} />
        <div style={{ width: 5, height: 16, borderRadius: 2.5, background: '#ec4899' }} />
      </div>
    ),
    { ...size }
  );
}
