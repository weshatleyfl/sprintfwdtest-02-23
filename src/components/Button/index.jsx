import "./button.css";


const Button = ({
  disabled = false,
  title,
  className,
  ...props
}) => {
  return (
    <>
      <button
        className={`button ${className}`}
        disabled={disabled}
        {...props}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
