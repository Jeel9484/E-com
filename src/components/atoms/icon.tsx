// components/atoms/Icon.tsx
import { FC } from "react";
import {
  Eye,
  Heart,
  ShoppingBag,
  Grid2X2,
  List,
  ChevronDown,
} from "lucide-react";

type IconType = "eye" | "heart" | "cart" | "grid" | "list" | "chevron-down";

interface IconProps {
  name: IconType;
  size?: number;
  className?: string;
}

const icons = {
  eye: Eye,
  heart: Heart,
  cart: ShoppingBag,
  grid: Grid2X2,
  list: List,
  "chevron-down": ChevronDown,
};

const Icon: FC<IconProps> = ({ name, size = 24, className = "" }) => {
  const LucideIcon = icons[name];
  return <LucideIcon size={size} className={className} />;
};

export default Icon;
