import Logo from './../Logo';
import Menu from './../Menu';

import './index.scss';

const Header = () => {
    return (
        <div className="header">
            <Logo/>
            <Menu />
        </div>
    );
};

export default Header;