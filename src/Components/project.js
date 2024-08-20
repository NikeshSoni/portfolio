

import React from 'react';

import Apple from '../Images/projects-img/Apple_img.png';
import Revolt from '../Images/projects-img/revolt-logo.png';
import Layers from '../Images/projects-img/Logo_White.webp';
import RedMagic from '../Images/projects-img/main-logo.webp';
import minimo_logo from '../Images/projects-img/minimo-logo.jpeg';
import Contact from './Contact';

import Fb from '../Images/footer-img/fb.webp';
import insta from '../Images/footer-img/insta.webp';

const Project = () => {

    const projects = [
        {
            title: 'niccolomiranda Web Design',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICfjfvUACa0NxB0a7RtBsp8DJR7PIrvj3tbrIYPxpiQwrHM0p3gA8khxNzg&s',
            discription: 'Using React.js',
            purpose: 'Self Made Project',
            links: 'https://nikeshsoni.github.io/niccolomiranda/'
        },
        {
            title: 'Apple.in',
            img: Apple,
            discription: ' Hii its my Apple website',
            purpose: 'For Learning Purpose',
            links: 'https://nikeshsoni.github.io/apple/iphone.html'
        },
        {
            title: 'Revolt Moters',
            img: Revolt,
            discription: ' Hii its my Revolt Moters website',
            purpose: 'For Learning Purpose',
            links: 'https://nikeshsoni.github.io/revolt-main-project/#'
        },
        {
            title: 'Layers',
            img: Layers,
            discription: ' Hii its my Layers Phone Skin website',
            purpose: 'For Learning Purpose',
            links: 'https://nikeshsoni.github.io/new-project/'
        },
        {
            title: 'RedMagic',
            img: RedMagic,
            discription: ' Hii its my RedMagic Clone',
            purpose: 'For Learning Purpose',
            links: 'https://nikeshsoni.github.io/RedMagic/index.html',
        },
        {
            title: 'Minimo',
            img: minimo_logo,
            discription: 'using by Html & Scss Bootstrap website',
            purpose: 'For Learning Purpose',
            links: 'https://nikeshsoni.github.io/minomo-new/'
        },
        {
            title: 'Calculation',
            img: 'https://nikeshsoni.github.io/navodaya-bank/images/navodaya-logo.jpeg',
            discription: 'using by Html & Scss Bootstrap website',
            purpose: 'For Learning Purpose',
            links: 'https://nikeshsoni.github.io/navodaya-bank/'
        },


    ]

    let myNumber = 9152910443;
    const myNum = () => {
        alert(`Hii Its My number ${myNumber} `)
    }

    return (
        <>

            <div className='text-center mb-3' id='projects'>
                <h2>
                    My Projects
                </h2>
            </div>

            <div className='row gap-3 justify-content-center my-4'>
                {projects.map((items) => {
                    return (
                        <div data-aos="zoom-in-right" className='col-10 mt-3 col-md-5 col-lg-3 center-all-data shadow-lg p-3'>
                            <a href={items.links}>
                                <img className='img-fluid comman-width-height' src={items.img} />
                            </a>

                            <div className='discription mt-2 text-center '>
                                <h6 className='headding'>
                                    {items.title}
                                </h6>

                                <p className='my-2'>
                                    {items.discription}
                                </p>
                                <p className='my-2'>
                                    {items.purpose}
                                </p>

                                <button className='projects-btn'>
                                    <a className='text-white' href={items.links} >Visit Site</a>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>


            <Contact />

            <footer>
                <div className='bg-dark p-4 text-center text-white'>
                    <h2>I am on Social Media</h2>

                    <div className='d-flex gap-5 justify-content-center mt-3'>
                        <a href='#'>
                            <img className='img-fluid social-meadia' src={Fb} />
                        </a>
                        <a href='https://instagram.com/__nikesh___321?igshid=ZDdkNTZiNTM='>
                            <img className='img-fluid social-meadia' src={insta} />
                        </a>
                        <a onClick={myNum} href='#'>
                            <img className='img-fluid whats-app ' src='http://pluspng.com/img-png/whatsapp-png-wazapp-logo-whats-whatsapp-logo-whatsapp-icon-2050.png' />
                        </a>
                    </div>

                    <div className='my_mail mt-3'>
                        <h4>
                            My G-mail
                        </h4>
                        <p>
                            nikesh21soni@gmail.com
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Project;