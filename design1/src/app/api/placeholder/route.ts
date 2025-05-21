export async function GET() {
  // Create a simple colored SVG to serve as an image placeholder
  const colors = ['#8b5cf6', '#6366f1', '#3b82f6'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  const svg = `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${randomColor}" />
      <circle cx="100" cy="100" r="70" fill="white" opacity="0.2" />
      <path d="M70 80 L130 80 L150 120 L100 150 L50 120 Z" fill="white" opacity="0.6" />
    </svg>
  `;
  
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
