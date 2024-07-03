import ButtonSvg from '../public/assets/svg/ButtonSvg';

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 bg-conic-gradient rounded-[1.7rem] p-[1.5px] transition-colors hover:text-color-1 ${
    px || 'px-7'
  } ${className || ''}`;

  const spanClasses = 'bg-n-8 rounded-[1.7rem] p-4';

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
