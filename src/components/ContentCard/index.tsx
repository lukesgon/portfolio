import './styles.css';

interface ContentCardProps {
    className?: string,
    id?: string,
    children: React.ReactNode
};

const ContentCard = ({ className, id, children }: ContentCardProps) => {
    return (
        <article
        className={ className }
        id={ id }>
            { children }
        </article>
    )
};

export default ContentCard;