

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  color?: string;
  bg?: 'gray' | 'red' | 'yellow';
  size?: 'sm' | 'md' | 'lg'
}

function Button({ children, bg='gray', size="md", ...rest }: ButtonProps) {
  const btnColor = {
    gray: 'bg-gray-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
  }

  const hoverColor = {
    gray: 'hover:bg-gray-700',
    red: 'hover:bg-red-700',
    yellow: 'hover:bg-yellow-700',
  };

  const btnSize = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-2 px-6 text-lg',
  }
  // return (
  //   <button className={`${btnColor[bg]} border-0 text-white py-1.5 px-4 mx-0.5 rounded-md cursor-pointer hover:bg-green-700 duration-300 ${btnSize[size]}`} {...rest}>
  //     {children}
  //   </button>
  // );
  return (
    <button className={`${btnColor[bg]} border-0 text-white mx-0.5 rounded-md cursor-pointer ${hoverColor[bg]} duration-300 ${btnSize[size]} `} {...rest}>
      {children}
    </button>
  );
}

export default Button;