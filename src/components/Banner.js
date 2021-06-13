import React, { useEffect } from 'react'
// import { mainImageUrl } from '../db';
import mainImageUrl from '../images/chair.webp'
import gsap from 'gsap';

export default function Banner() {
    useEffect(() => {
        const BannerTL = gsap.timeline();

        BannerTL.from(['#bannerBgAddition', '#bannerBg'],
            {
                duration: 1.2,
                width: 0,

                skewX: 4,
                ease: 'power3.inOut',
                stagger: {
                    amount: 0.2
                }
            }

        ).from(['.plogo', '#h1-title'], {
            delay: 0.2,
            y: 80,
            opacity: 0,
            duration: .8,
            ease: 'power3.out',
            stagger: {
                amount: 0.2
            }
        }).from(['#p-content', '.btn-row'], {
            delay: -0.6,
            y: -40,
            duration: .8,
            opacity: 0,
            ease: 'power3.out',
            stagger: {
                amount: 0.3
            }
        }).from(['.scroll-down', '.line1'], {
            opacity: 0,
            duration: .8,
            y: -10,
            ease: 'power3.out',
            stagger: {
                amount: 0.2
            }

        });

        gsap.from('#chair', {
            delay: 2.2,
            x: -100,
            skewX: 2,
            duration: 0.8,
            opacity: 0,
            ease: 'power3.out'
        });



        gsap.from(['#featureBanner', '#featureBannerGreen'], {
            delay: 2.4,
            x: -60,
            skewX: 6,
            duration: 0.8,
            opacity: 0,
            ease: 'power3.out',
            stagger: {
                amount: .2
            }
        });

        gsap.from('#grey-bg', {
            delay: 2.2,
            x: 100,
            skewX: 2,
            duration: 0.8,
            opacity: 0,
            ease: 'power3.out'
        });


    }, [])

    return (
        <div className='banner' id='banner'>
            <div id='bannerBgAddition' className='banner-addition-bg'></div>
            <div id='bannerBg' className='banner-bg'></div>

            <span className='left-rect'></span>
            <div className='line1'>
                <span></span>
            </div>

            <div className='scroll-down'></div>

            <div className='container'>
                <div className='row'>
                    <div className='banner-inner' id='bannerInner'>
                        <div className='content'>
                            <div className='content-inner'>
                                <p className='plogo'>Qualifurni</p>
                                <h1 id='h1-title'>Modern Furnitures</h1>
                                <p id='p-content'>Modern and high quality furnitures are available at Qualfurni</p>

                                <div className='btn-row'>
                                    <a href="/">Buy Now</a>
                                </div>



                            </div>
                        </div>


                        <div className='image'>
                            <div className="image-inner">
                                <img src={mainImageUrl} alt="chair" id='chair' />
                                <div className='feature-banner' id='featureBanner'>Free Delivery</div>
                                <div className='feature-banner green' id='featureBannerGreen'>High Quality</div>
                                <div className='banner-bg' id='grey-bg'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
