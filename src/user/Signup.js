import React, {useState} from "react";
import {Link} from "react-router-dom";
import Base from "../core/Base";
import { signup } from "../auth/helper/index";



const Signup = () => {

    const  [values, setValues] = useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false
    });
    const {name, email, password, error, success} = values;

    const handleChange = name => event =>{
        setValues({...values, error : false, [name] : event.target.value});
    }

    const onSubmit = event =>{
        event.preventDefault();
        setValues({...values, error:false});
        signup({name,email,password})
        .then(data => {
            if(data?.error){
                setValues({...values, error:data?.error, success:false});
            }
            else{
                setValues({
                    ...values,
                    name:"",
                    email:"",
                    password:"",
                    error:"",
                    success:true
                });
            }
        })
        .catch(console.log("Errorin signup"));
    }
    const signUpForm = () =>{
        return(
            <div className = "row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input className="form-control" type="text" onChange={handleChange("name")}></input>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" type="email" onChange={handleChange("email")}></input>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control" type="password" onChange={handleChange("password")}></input>
                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                    
                </div>
            </div>
        );
    }

    const successMessage =()=>{
        return(
            <div className="row">
                <div className="co-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success"
                     style={{display:success ? "":"none"}}>
                        New account was created successfully. Please{" "}
                        <Link to="/signin"></Link>
                    </div>
                </div>
            </div>
        )
    }

    const errorMessage =()=>{
        return(
            <div className="row">
                <div className="co-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger"
                     style={{display:error ? "":"none"}}>
                        {error}
                    </div>
                </div>
            </div>
        )
    }
    return(
        <Base title="Sign Up here" description="This is where our journey begins!!">
        {signUpForm()}
        {successMessage()}
        {errorMessage()}
        {JSON.stringify(values)}
        </Base>
    );
}

export default Signup; 