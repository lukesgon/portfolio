import './styles.css';

interface ContentSectionProps {
    className?: string,
    id?: string,
    children: React.ReactNode
    onClick?: (event: React.MouseEvent)=> void
}

const ContentSection = ({ className, id, children, onClick }:ContentSectionProps) => {
    return(
        <section
        className={ className }
        id={ id }
        onClick={ onClick }>
            { children }
        </section>
    )
};

export default ContentSection;