import React from "react";

const NavbarSection = () => {
    return (
        <div className="navbar_component w-nav"
              data-easing="ease" data-collapse="medium">
            <div className="navbar_container">
                <a href="/public" aria-current="page" className="navbar_logo-link w-nav-brand w--current">
                    <img
                        src="/temp-logo.png"
                        alt="Logo"
                        className="navbar_logo"
                        width="170"
                    />
                </a>
                <nav role="navigation"
                     id="w-node-_432ab101-ff29-e709-9083-318b395c580b-395c5807" className="navbar_menu w-nav-menu">
                    <a href="/public" aria-current="page"
                       className="navbar_link w-nav-link w--current">Home</a>
                    <a href="/about" className="navbar_link w-nav-link">About</a>
                    <a href="/pricing"  className="navbar_link w-nav-link">Pricing</a>
                    <a href="/blog"  className="navbar_link w-nav-link">Blogs</a>
                    <a href="/contact"  className="navbar_link w-nav-link">Contact</a>
                    <a href="/log-in" className="button is-small hide-desktop w-button">Log In</a>
                </nav>
                <div className="navbar_button-wrapper">
                    <a href="/log-in" className="button is-small hide-mobile-landscape w-button">Log In</a>
                    <div className="navbar_menu-button w-nav-button">
                        <div className="menu-icon">
                            <div className="menu-icon_line-top"></div>
                            <div className="menu-icon_line-middle">
                                <div className="menu-icon_line-middle-inner"></div>
                            </div>
                            <div className="menu-icon_line-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarSection;

