const Menu = () => {
    return (
        <nav id="header__menu">
            <div className="header__mobile-hamburger">

            </div>
            <div className="header__list">
                <a href="#">Ana Sayfa</a>
                <a href="#">Hakkımızda</a>
                <a href="#">Hizmetler</a>
                <a href="#">İletişim</a>
                <a className="header__kapat">Kapat (X)</a>
            </div>
        </nav>
    )
}

export default Menu;