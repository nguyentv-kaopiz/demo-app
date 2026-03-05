import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface BadgeProps {
  rank: number;
  iconImage: string | StaticImport;
  level: number;
  userName: string;
  background_border?: string;
  duration?: number;
  background_color?: string;
  background_images?: string;
  background_icons?: string[];
  textColor?: string;
  style_icon?: string;
}