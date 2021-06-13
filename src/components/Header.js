import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';



export default function Header() {


    let header = useRef(null);

    useEffect(() => {
        gsap.from(
            '#header',
            {
                y: 16,
                opacity: 0,
                duration: .8,
                delay: 1.2,
                ease: 'power3.inOut'
            }
        )
    }, [])


    return (
        <div id='header' ref={header}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='header-inner'>
                        <div className='logo'>Qualifurni</div>
                        <div className='navigation'>
                            <nav>
                                <ul>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Furnitures</a></li>
                                    <li><a href="">Contact Us</a></li>

                                </ul>
                            </nav>
                        </div>

                        <div className='nav-login'>
                            <div className='login'>
                                <a href="">Log in</a>
                            </div>
                            <div className='apply'>
                                <a href="">Apply now</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>








    )
}
