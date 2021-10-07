import { Link } from 'react-router-dom';
import cn from './Navigation.module.scss';

const Navigation = () => {
    return (
        <nav className={cn.container}>
            <div></div>
            <Link to='/'>LBE</Link>
            <Link to='/'>Pick Ban Pro</Link>
            <Link to='/teams'>Teams</Link>
        </nav>
    );
}

export default Navigation;
