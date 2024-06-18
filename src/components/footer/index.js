import React from 'react'
import {Link}  from 'react-router-dom'
import Projects from '../../api/projects'


const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="widget about-widget">
                            <div className="logo widget-title" style={{"text-align":"center"}}>
                                <Link onClick={ClickHandler} className="logo" to="/">Sự hiện diện của bạn là vinh hạnh của chúng tôi</Link>
                            </div>
                            <p style={{"text-align":"center"}}> #NgocThanhHoangAi
                                </p>
                    
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> Chúc hai bạn hạnh phúc.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;