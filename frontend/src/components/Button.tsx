interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="border px-2 cursor-pointer"
      {...props}
    >{children}</button>
  )
};

export default Button;
