import './styles.css';

interface CardTitleProps {
    className?: string,
    id?: string,
    children: string
};

const CardTitle = ({ className, id, children }: CardTitleProps) => {
    return(
        <h3
        className={ className }
        id={ id }>
            { children }
        </h3>
    )
};

export default CardTitle;
