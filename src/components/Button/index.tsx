import './styles.css';

interface ButtonProps {
    className?: string;
    id?: string;
    children: React.ReactNode;
    onClick: (event: React.MouseEvent) => void;
};


const Button = ({ className, id, children, onClick }: ButtonProps ) => {
    return (
        <button
            id={id}
            className={className}
            onClick={onClick}>
            {children}
        </button>
    )
};
export default Button;