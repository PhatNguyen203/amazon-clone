import React from 'react';
import './header.css';

import {Link} from 'react-router-dom'

//import Material UI
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
    return(
        <div className="header">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" className="header_logo"/>
            </Link>
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
                <span className="header_option_lineOne">
                        Your
                    </span>
                <span className="header_option_lineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_option_lineTwo header_basketCount">0</span>  
                    </div>
                </Link>
               
            </div>
        </div>
    )
}

export default Header;