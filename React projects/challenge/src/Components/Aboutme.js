import React from 'react';
import '../App.css';
import img from './images/John-Doe.jpg'



const Aboutme = () => {
    return (
        <div>
            <section id="about-me">
                <h1> Hello, my name is
                  <span class="rotate text-important">John doe</span>,
                  <br />
                  and i make horrible websites.
               </h1>
               <img class="avatar" src={img}  alt="php" />
                
            </section>
        </div>

    );
}

export default Aboutme;