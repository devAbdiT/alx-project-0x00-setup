import { ButtonProps, PillProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ styles }) => {
  return <button className={styles}>size</button>;
};

export default Button;
