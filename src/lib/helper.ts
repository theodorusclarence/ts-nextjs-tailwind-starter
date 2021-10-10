export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export function openGraph(title: string, description: string): string {
  const ogTitle = encodeURIComponent(title.trim());
  const ogDesc = encodeURIComponent(description.trim());
  return `https://thcl.dev/og?title=${ogTitle}&description=${ogDesc}`;
}
