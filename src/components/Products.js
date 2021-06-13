import React from 'react'
import { productInfo } from '../db'

export default function Products() {
    return (
        <div className='product'>
            <div className='container'>
                <div className='row'>
                    <div className='product-inner'>
                        <h3 className='title'>New products</h3>
                        <div className='product-content'>
                            {
                                productInfo.map((item, index) => {
                                    return (
                                        <div className='card'>
                                            <div className='image'><img src={item.imageUrl} alt="" /></div>
                                            <h2>{item.title}</h2>
                                            <h3>{item.price}</h3>
                                            <p>{item.description}</p>

                                            <div className='btn'>Buy now</div>
                                        </div>
                                    );
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
