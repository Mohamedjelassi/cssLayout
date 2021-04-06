import React from 'react';
import '../App.css';


const  Navbar = () => {
    return (
        <div>
            <header>
                <h1>John Doe</h1>
                <ul class="navmenu">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </header>
        </div>

    );
}

export default Navbar;