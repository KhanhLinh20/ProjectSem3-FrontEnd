import React from 'react'


const Product = () => {
    return (
        <div>
           
                <div className='row'>
                    <div className='col-4 mt-2'>
                    <div className="card " style={{ width: '18rem' }}>
                        <img src="" className="card-img-top" alt="..." />
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
    )
}

export default Product
