import React,{Component} from 'react';

class Footer extends Component {
    render(){
        return(
            <div className="container bg-primary footerBox">
               <div className="row text-center">
                  <div className="col-6">
                    <h6>Powered by RXJS</h6>
                  </div>
                  <div className="col-6">
                     <h6>Copyrights@Triodesk</h6>
                  </div>
               </div>
            </div>
        )
    }
}

export default Footer;