import React,{Component} from 'react';
import '../styles/comman.css'

class Navbar extends Component{
    render(){
        return(          
            <nav className="navbar navbar-light bg-primary justify-content-between">
                <a className="navbar-brand">
                    <img src={require('../imgs/logo1.png')} />
                </a>
                <a class="nav-item my-2 my-sm-0" href="#">Username</a>
            </nav>

        )
    }
}
export default Navbar