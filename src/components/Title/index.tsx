import './styles.css'

interface TitleProps {
    className?: string,
    id?: string,
    children: React.ReactNode
};

const Title = ({ className, id, children }: TitleProps) => {
    return(
        <h1
        className={ className }
        id={ id }>
            { children }
        </h1>
    )
};

export default Title;