import './styles.css';

interface ImgBoxProps {
    figClassName?: string,
    imgClassName?: string,
    captClassName?: string,
    figId?: string,
    imgId?: string,
    captId?: string,
    src: string,
    alt: string,
    children?: React.ReactNode,
};

const ImgBox = (
    {
        figClassName,
        imgClassName,
        captClassName,
        figId,
        imgId,
        captId,
        src,
        alt,
        children
    }: ImgBoxProps
) => {
    return(
        <figure
        className={ figClassName }
        id={ figId }>
            <img
            className={ imgClassName }
            id={ imgId }
            src={ src }
            alt={ alt } />
                <figcaption
                className={ captClassName }
                id={ captId }>
                    { children }
                </figcaption>
        </figure>
    )
};

export default ImgBox;