import React, { Component } from 'react';
import '../styles/login.css'
import Dashboard from './dashboard'

import {
    BrowserRouter as Router,
    Link,
    Route
  } from 'react-router'


class Login extends Component {

   handlelogin(){
    console.log('done')
   }




    render(){
        return(
            <div className="container loginBox text-center">
                <div className="row">
                    <div className="col-4 offset-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Login</h5>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control text-center" id="formGroupExampleInput" placeholder="Username"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control text-center" id="formGroupExampleInput" placeholder="Password"/>
                                    </div>
                                </form>
                                <button  className="btn btn-primary" onClick={this.handlelogin}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login