import React from 'react';
import './header.css';

//import Material UI
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return(
        <div className="header">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" className="header_logo"/>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_option_lineOne">
                        Hello, Signin
                    </span>
                    <span className="header_option_lineTwo">
                        Account & List
                    </span>
                </div>
                <div className="header_option">
                <span className="header_option_lineOne">
                        Returns
                    </span>
                    <span className="header_option_lineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                <span className="header_option_lineTwo">
                        Prime
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;