import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import './styles.css'

interface IconBoxProps {
    className?: string;
    iconSize?: string;
    id?: string;
    caption?: string;
    children: React.ReactNode;
}

const IconBox = ({ className, id, caption, children, iconSize }: IconBoxProps) => {
    const [isActive, setIsActive] = useState(false);

    const handleMouseOver = () => {
        setIsActive(true);
    };

    const handleMouseOut = () => {
        setIsActive(false);
    };

    return (
        <figure className={className} id={id} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <IconContext.Provider value={{ 
                size: iconSize, 
                style: {fill: `${isActive?'var(--thirth-color)':'var(--second-color)'}`, 
                transition:'300ms'}}}>
                
                {children}
            </IconContext.Provider>
            <figcaption>{caption}</figcaption>
        </figure>
    );
};

export default IconBox;
