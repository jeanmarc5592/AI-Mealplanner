import { NavLink } from "./types";

export const MealPlansLink: NavLink = {
  title: 'Meal Plans', 
  href: '/meal-plans',
  isActive: function (path: string) {
    return path.startsWith(this.href);
  }
};

export const LINKS: NavLink[] = [
  MealPlansLink,
];

export const DRAWER_WIDTH_DESKTOP = '20vh';

