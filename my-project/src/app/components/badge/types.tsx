import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface BadgeProps {
  rank: number;
  iconImage: string | StaticImport;
  level: number;
  username: string;
  background_color?: string;
  background_images?: string[];
  colorrank?: string;
  textcolor?: string;
  style_icon?: string;
}