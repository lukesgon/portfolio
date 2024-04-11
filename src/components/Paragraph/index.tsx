import './styles.css';

interface ParagraphProps {
    className?: string,
    id?: string,
    children: React.ReactNode
}

const Paragraph = ({ className, id, children }: ParagraphProps) => {
    return(
        <p
        className={ className }
        id={ id }>
            { children }
        </p>
    )
};

export default Paragraph;