import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {
    state = {  }
    render() {
        console.log('Navbar- Rendered');
        const {totalCounters} = this.props;
        return (
            <React.Fragment>
                <nav className="navbar navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        Navbar { " " }
                        <span className="badge-pill badge-secondary">
                            {totalCounters}
                        </span>
                    </Link>
                    <Link className="navbar-brand" to="/">
                        Home { " " }
                    </Link>
                    <Link className="navbar-brand" to="/movies">
                        Movies
                    </Link>
                </nav>
            </React.Fragment>
         );
    }
}
export default NavBar;
