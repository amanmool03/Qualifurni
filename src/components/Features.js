import React from 'react';
import { featureInfo } from '../db';
import arrow from '../images/right-arrow.png';

export default function Features() {
    return (
        <div className='features' id='features'>
            <div className='container'>
                <div className='row'>
                    <div className='feature-inner'>
                        <div className='feature-content'>

                            <h3>we are here to provide you with the best services</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ipsa iure eveniet sint consectetur dignissimos, quidem corporis illum recusandae quaerat laborum necessitatibus! Nesciunt nulla laboriosam suscipit, possimus ullam voluptatibus magni?</p>

                            <div className='btn-row'>
                                <a href="/"> View all Services <img src={arrow} alt="" /></a>
                            </div>
                        </div>
                        <div className='features-list'>
                            <ul>
                                {
                                    featureInfo.map((item, index) => {
                                        return (
                                            <li>
                                                <img src={item.imageUrl} alt="" />
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </li>
                                        );
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
