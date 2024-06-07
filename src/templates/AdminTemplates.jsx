import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminTemplates = () => {
    return (
        <>
            <div className="d-flex">
                <div
                    className="w-25 bg-dark text-white"
                    style={{ minHeight: "100vh" }}
                >
                    <h4 className='text-warning p-5'>Dash Board</h4>
                    <ul className="mt-2">
                        <li>
                            <NavLink className={"nav-link"} to="/admintemplates/User">
                                User
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"nav-link"} to="/admintemplates/Product">
                                Products
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="w-75">
                    <div className="bg-dark text-white w-100 p-3 text-end">
                        <NavLink to="" className="nav-link d-inline-block text-center ">
                            <span className="rounded-circle">
                                <i className="fa fa-user"></i>
                            </span>
                            <br />
                            hello abc
                        </NavLink>
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
            ;

        </>
    )
}

export default AdminTemplates
