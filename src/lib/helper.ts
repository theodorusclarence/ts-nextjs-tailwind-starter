export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export function openGraph(
  title: string,
  description: string,
  logo = 'https://og.thcl.dev/images/logo.jpg'
): string {
  const ogLogo = encodeURIComponent(logo);
  const ogTitle = encodeURIComponent(title.trim());
  const ogDesc = encodeURIComponent(description.trim());
  return `https://og.thcl.dev/api/general?title=${ogTitle}&description=${ogDesc}&logo=${ogLogo}`;
}
