import Facebook from '../img/facebook.svg';
import Twitter from '../img/twitter.svg';
import Instagram from '../img/instagram.svg';
const Footer = () => {
    return(
        <div className="footer">
           <div className="footerContent">
               <div className="footerTitle">
                <h3>Pedal<span>Store</span></h3>   
               </div>
                    {/* <div className="redes"> */}
                        {/* <h3>Síguenos en nuestras redes</h3> */}
                        <div className="redesContent">
                            <div className="redes_box"><a href=""><img src={Facebook} alt="imagen de las redes"/></a><div className="footerDark"></div></div>
                            <div className="redes_box"><a href=""><img src={Twitter} alt="imagen de las redes"/></a><div className="footerDark"></div></div>
                            <div className="redes_box"><a href=""><img src={Instagram} alt="imagen de las redes"/></a><div className="footerDark"></div></div>
                        </div>
                    {/* </div> */}
            </div>
            <p>Sitio web sin fines de lucro.<br/>Copyright 2022 Mario Massonnat. All rights reserved.</p>     
       </div>
    );
}

export default Footer;