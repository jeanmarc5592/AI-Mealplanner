import { NavLink } from "./types";

export const HomeLink: NavLink = {
  title: 'Home', 
  href: '/', 
  isActive: function (path: string) {
    return path === this.href;
  }
};

export const MealPlansLink: NavLink = {
  title: 'Meal Plans', 
  href: '/meal-plans',
  isActive: function (path: string) {
    return path.startsWith(this.href);
  }
};

export const LINKS: NavLink[] = [
  HomeLink,
  MealPlansLink,
];

export const DRAWER_WIDTH_DESKTOP = '20vh';

