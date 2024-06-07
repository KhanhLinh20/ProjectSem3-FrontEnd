import React from 'react'
import { NavLink } from 'react-router-dom'
import cv from '../images/cv1.jpg'
import fresher from '../images/Fresher.jpg'
import personal from '../images/personal.jpg'
import blog from '../images/blog.jpg'
import Image from 'react-bootstrap/Image';


const CreateCV = () => {
    return (
        <div className='container-fluid '>
            <div className='row'>
                <div className='d-flex justify-content-center '>
                    <div className="card m-3" style={{ width: '18rem',border:"none" }}>

                        <Image src={cv} roundedCircle />
                        <div className="card-body">
                            <h5 className="card-title">Create CV</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            <button className='btn btn-outline-success'><NavLink to="#" style={{ textDecoration: 'none', color: 'black' }}> Create Now</NavLink></button>
                        </div>
                    </div>
                    <div className="card m-3 " style={{ width: '18rem',border:"none" }}>
                    <Image src={fresher} roundedCircle />
                        <div className="card-body">
                            <h5 className="card-title">Personality test</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className='btn btn-outline-success'><NavLink to="#" style={{ textDecoration: 'none', color: 'black' }}> Check Now</NavLink></button>
                        </div>
                    </div>
                    <div className="card m-3" style={{ width: '18rem',border:"none" }}>
                    <Image src={personal} roundedCircle />
                        <div className="card-body">
                            <h5 className="card-title">Fresher Job</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className='btn btn-outline-success'><NavLink to="#" style={{ textDecoration: 'none', color: 'black' }}> Discover</NavLink></button>
                        </div>
                    </div>
                    <div className="card m-3" style={{ width: '18rem' ,border:"none"}}>
                    <Image src={blog} roundedCircle />
                        <div className="card-body">
                            <h5 className="card-title">Blog It</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className='btn btn-outline-success'><NavLink to="#" style={{ textDecoration: 'none', color: 'black' }}> Read Now</NavLink></button>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default CreateCV
