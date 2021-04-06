


import React from 'react';
import '../App.css';
import img from './images/proj1.jpg'
import img1 from './images/proj2.jpg'
import img2 from './images/proj3.jpg'
import img3 from './images/proj4.jpg'




const PROJECTS = () => {
    return (
        <div>
            <section id="projects">
                <h2 class="text-important">Projects</h2>
                <div class="projects-container">

                    <div class="project-card">
                       
                        <img src={img}  />

                        <h3>Project 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
                            aliquam.
          </p>
                        <p><a href="#">Github Link</a></p>
                    </div>

                    <div class="project-card">
                        
                        <img src={img1}  />
                        <h3>Project 2</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
                            aliquam.
          </p>
                        <p><a href="#">Github Link</a></p>
                    </div>

                    <div class="project-card">
                        <img src={img2} alt="project" />
                        <h3>Project 3</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
                            aliquam.
          </p>
                        <p><a href="#">Github Link</a></p>
                    </div>

                    <div class="project-card">
                     
                        <img src={img3} alt="project" />
                        <h3>Project 4</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
                            aliquam.
          </p>
                        <p><a href="#">Github Link</a></p>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default PROJECTS;