import './styles.css';

interface CardSubTitleProps {
    className?: string,
    id?: string,
    children: string
};

const CardSubTitle = ({ className, id, children }: CardSubTitleProps) => {
    return (
        <h4
        className={ className }
        id={ id }>
            { children }
        </h4>
    )
};

export default CardSubTitle;