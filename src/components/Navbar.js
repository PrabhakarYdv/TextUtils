import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        // <>
        //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //         <a className="navbar-brand" href="/">TextUtils</a>
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //             <ul className="navbar-nav mr-auto">
        //                 <li className="nav-item active">
        //                     <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="/">About</a>
        //                 </li>
        //             </ul>
        //             {/* <form className="form-inline my-2 my-lg-0">
        //                 <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        //                 <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
        //             </form> */}
        //     </nav>
        // </>

        <>
            <nav className={`${props.mode}`}>
                <ul className={`${props.mode}`}>
                    <li className={`${props.mode} main-li`} style={{ }}><Link to="/"> TextUtils</Link></li>
                    <li className={`${props.mode}`}><Link className={`${props.mode}`} to="/">Home</Link></li>
                    <li className={`${props.mode}`}><Link className={`${props.mode}`} to="/about">About</Link></li>
                    <li className={`toogle-container ${props.mode}`}>
                        <div className={`custom-control custom-switch ${props.mode}`}>
                            <input type="checkbox" className={`custom-control-input ${props.mode}`} onClick={props.toggleTheme} id="customSwitch1" />
                            <label className={`custom-control-label ${props.mode}`} htmlFor="customSwitch1" id="toggleBtn"></label>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
}