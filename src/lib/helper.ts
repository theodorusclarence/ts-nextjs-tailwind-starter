export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export function openGraph(
  title: string,
  description: string,
  logo = 'https://theodorusclarence.com/favicon/large-og.jpg'
): string {
  const ogLogo = encodeURIComponent(logo);
  const ogTitle = encodeURIComponent(title.trim());
  const ogDesc = encodeURIComponent(description.trim());
  return `https://og-image.vercel.app/%3Cdiv%20style%3D%27position%3A%20absolute%3B%20inset%3A%200%3B%20background%3A%20%23222%3B%20color%3A%20white%3B%20display%3A%20flex%3B%20align-items%3Acenter%3B%20justify-content%3Acenter%3B%20flex-direction%3A%20column%3B%27%3E%0A%20%20%3Cimg%20src%3D%22${ogLogo}%22%20alt%3D%22Favicon%22%20style%3D%27max-width%3A%20180px%27%3E%0A%20%20%3Ch3%20style%3D%27margin%3A%200%3Bmargin-top%3A1rem%3B%27%3E${ogTitle}%3C%2Fh3%3E%0A%20%20%3Cp%20style%3D%22margin%3A%200%3B%20margin-top%3A0.5rem%3B%20font-size%3A3rem%3B%20max-width%3A%2070%25%3B%22%3E%3Csmaller%3E${ogDesc}%3C%2Fsmaller%3E%3C%2Fp%3E%0A%3C%2Fdiv%3E.png?theme=dark&md=1&fontSize=75px&images=https://assets.vercel.com/image/upload/front/assets/design/vercel-triangle-white.svg`;
}
