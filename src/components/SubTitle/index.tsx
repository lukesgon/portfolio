import './styles.css';

interface SubTitleProps {
    className?: string,
    id?: string,
    children: string
};

const SubTitle = ({ className, id, children }: SubTitleProps) => {
    return(
        <h2
        className={ className }
        id={ id }>
            { children }
        </h2>
    )
};

export default SubTitle;