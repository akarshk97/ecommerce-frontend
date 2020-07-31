import React from "react";
import Menu from "./Menu";


const Base = ({
    title = "My Title",
    description = "My description",
    className = "bg-dark text-white p-4",
    children
}) =>{
    return(

        <div>
            <Menu></Menu>
            <div className="container-fluid">
                <div className="jumbotronb bg-dark text-white text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
            <div className={className}>{children}</div>

            </div>
            <footer className="footer bg-dark mt-auto py-3">
                <div className="container-fluid bg-info text-white text-center py-3">
                    <h4>If you got any question please reach out !!</h4>
                    <button className = "btn btn-warning btn-lg">Contact Us</button>
                </div>
                <div className="container">
                    <span className="text-muted"> a <span className="text-white">MERN</span> BootCamp</span>
                    </div>
            </footer>
        </div>
    );
}

export default Base;