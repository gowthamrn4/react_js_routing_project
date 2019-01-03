import  React,{Component} from 'react';
import Navbar from './navbar';
import Sidemenu from './sidemenu';
import Table from './table'
import Footer from './footer'
class Dashboard extends Component{
    render(){
        return(

            <div className="container">
                <div className="row navbarBox">
                    <div className="col-12">
                        <Navbar/>
                    </div>
                </div>
                <div className="row sideMenu">
                    <div className="col-3">
                       <Sidemenu/>
                    </div>
                    <div className="col-9 contents">
                        <div className="row">
                            <div className="col-10 offset-1">
                               <Table/>
                            </div>
                        </div>
                    </div>
                </div>
                   <Footer/>
            </div>
        )
    }
}

export default Dashboard