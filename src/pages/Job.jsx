import React from 'react'
import java from '../images/JavaScript.jpg'
import asp from '../images/Asp.jpg'
import c from '../images/C++.jpg'
import laravel from '../images/laravel.jpg'
import node from '../images/Node.jpg'
import python from '../images/python.jpg'


const Job = () => {
    return (
        <div>
            <div className='container-fluid '>

                <div className='row '>
                   
                    <div className='col-3 mt-2'>
                        <div className="card" style={{ width: '20rem' }}>
                            <img src={java} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className='card-text'>Price : <span>15$</span></p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger ">Supply Now</button>
                            </div>
                        </div>

                    </div>
                    <div className='col-3 mt-2'>
                        <div className="card " style={{ width: '20rem' }}>
                            <img src={node} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className='card-text'>Price : <span>15$</span></p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger "><i className="fa fa-cart-plus"></i>Add to Cart</button>
                            </div>
                        </div>

                    </div>
                    <div className='col-3 mt-2'>
                        <div className="card " style={{ width: '20rem' }}>
                            <img src={python} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className='card-text'>Price : <span>15$</span></p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger "><i className="fa fa-cart-plus"></i>Add to Cart</button>
                            </div>
                        </div>

                    </div>
                    <div className='col-3 mt-2'>
                        <div className="card " style={{ width: '20rem' }}>
                            <img src={c} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className='card-text'>Price : <span>15$</span></p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger "><i className="fa fa-cart-plus"></i>Add to Cart</button>
                            </div>
                        </div>

                    </div>
                    <div className='col-3 mt-2'>
                        <div className="card " style={{ width: '20rem' }}>
                            <img src={laravel} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className='card-text'>Price : <span>15$</span></p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger "><i className="fa fa-cart-plus"></i>Add to Cart</button>
                            </div>
                        </div>

                    </div>
                    <div className='col-3 mt-2'>
                        <div className="card " style={{ width: '20rem' }}>
                            <img src={asp} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className='card-text'>Price : <span>15$</span></p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger "><i className="fa fa-cart-plus"></i>Add to Cart</button>
                            </div>
                        </div>

                    </div>
                    <div className='col-3 mt-2'>
                        <div className="card " style={{ width: '20rem' }}>
                            <img src={java} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className='card-text'>Price : <span>15$</span></p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger "><i className="fa fa-cart-plus"></i>Add to Cart</button>
                            </div>
                        </div>

                    </div>
                    <div className='col-3 mt-2'>
                        <div className="card " style={{ width: '20rem' }}>
                            <img src={java} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className='card-text'>Price : <span>15$</span></p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger "><i className="fa fa-cart-plus"></i>Add to Cart</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Job
