import { MouseEventHandler } from "react";

type Variants = "base" | "success" | "error";
type Sizes = "base" | "md" | "lg";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variants;
  size?: Sizes;
}

const variantsMap: { [key in Variants]: string } = {
  base: "bg-gray-300 border border-gray-500",
  success: "bg-green-300 border border-green-500",
  error: "bg-red-300 border border-red-500",
};
const sizesMap: { [key in Sizes]: string } = {
  base: "px-2 py-1 text-xs",
  md: "px-4 py-2 text-md",
  lg: "px-8 py-4 text-lg",
};

const Button = ({
  children,
  variant = "base",
  size = "md",
  className,
  ...rest
}: ButtonProps) => (
  <button
    {...rest}
    className={`${variantsMap[variant]} ${sizesMap[size]} ${className}`}
  >
    {children}
  </button>
);
export default Button;
