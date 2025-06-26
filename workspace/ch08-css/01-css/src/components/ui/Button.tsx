import "./Button.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  color?: string;
  bg?: string;
}

function Button({ children, bg, color, ...rest }: ButtonProps){
  return (
    <button className={`bg-${bg}-text-${color}`}{...rest}> { children } </button>
  );
}

export default Button;