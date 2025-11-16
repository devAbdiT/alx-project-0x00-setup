import { ButtonProps, PillProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ style }) => {
  return <button className={style}>size</button>;
};

export default Button;
