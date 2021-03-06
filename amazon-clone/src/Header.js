import React from 'react';
import './header.css';

//import React ContextAPI
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';

//import Material UI
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
    const [{basket, user}, dispatch] = useStateValue();

    const isSignedIn = () => {
        if(user){
            auth.signOut()
        }
    }
    return(
        <div className="header">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" className="header__logo"/>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                    <Link to= { !user && '/login'}>
                        <div className="header__option" onClick={isSignedIn}>
                            <span className="header__optionLineOne">
                                {user ? user.email : 'Guest'}
                            </span>
                            <span className="header__optionLineTwo">
                                {user ? 'Sign Out': 'Sign In'}
                            </span>
                        </div>
                    </Link>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Your
                    </span>
                <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__option_lineTwo header__basketCount">
                        {basket?.length}    
                        </span>  
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;