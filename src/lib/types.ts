export type NavLink = {
  title: string;
  href: string;
  isActive: (path: string) => boolean;
}