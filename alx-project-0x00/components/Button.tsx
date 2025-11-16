import { PillProps } from "@/interfaces";

const Button: React.FC<PillProps> = ({ title, className = "" }) => {
  return <button className={className}>{title}</button>;
};

export default Button;
