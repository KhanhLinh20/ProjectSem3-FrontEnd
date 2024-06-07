import React from 'react'

const Find = () => {
    return (
        <div className='m-5'>

            <form className='container-fluid' >
                <h4 className='text-center'>Fast Search</h4>
                <div className="input-group">
                    {/* <input type="text" className="form-control" placeholder="Search Follow" /> */}
                    {/* <button type='submit' className='input-group-text  btn btn-outline-success'>Enter</button> */}
                </div>
                <div className='row'>
                    <div className='text-center'>
                        
                        <button className='card-title btn btn-outline-success m-3'>php</button>
                        <button className='card-title btn btn-outline-success m-3'>Laravel</button>
                        <button className='card-title btn btn-outline-success m-3'>C++</button>
                        <button className='card-title btn btn-outline-success m-3'>Python</button>
                        <button className='card-title btn btn-outline-success m-3'>JavaScript</button>
                        <button className='card-title btn btn-outline-success m-3'>Asp.Net</button>
                        <button className='card-title btn btn-outline-success m-3'>Node Js</button>

                    </div>

                </div>
            </form>

        </div>

    )
}

export default Find
