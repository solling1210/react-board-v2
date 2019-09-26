import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {

        const loginButton = (
            <li>
                <Link to="/login"><i className="material-icons">vpn_key</i></Link>
            </li>
        );

        const logoutButton = (
            <li>
                <a>
                    <i className="material-icons">lock_open</i>
                </a>
            </li>
        );

        return (
            <nav>
                <div className="nav-wrapper red darken-1">
                    <a className="brand-logo center">NEUROPHET</a>
                    <ul>
                        <li><a><i className="material-icons">search</i></a></li>
                    </ul>
                    <div className="right">
                        <ul>
                            { this.props.isLoggedIn ? logoutButton : loginButton }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

// props의 type과 기본값 설정
/*
Header.propTypes = {
    isLoggedIn: React.PropTypes.bool,
    onLogout: React.PropTypes.func
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined");}
};
*/

export default Header;