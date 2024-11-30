import Button from '../Button';

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const IconButton = function ({ className = '', children, onClick }: Props) {
  return (
    <Button
      className={`flex-shrink-0 w-[16px] h-[16px] flex items-center justify-center !p-0 ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default IconButton;
