import './styles.css';

interface NavBarProps {
    className?: string,
    id?: string,
    children: React.ReactNode
};

const NavBar = ({ className, id, children }: NavBarProps) => {
    return (
        <nav
        id={ id }
        className={ className }>
            { children }
        </nav>
    )
};

export default NavBar;