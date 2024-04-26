import "./grid.css";
import Image from 'next/image'
import landscape1 from "../../public/landscape-1.jpg";
import landscape2 from "../../public/landscape-2.jpg";
import landscape3 from "../../public/landscape-3.jpg";
import landscape4 from "../../public/landscape-4.jpg";
import landscape5 from "../../public/landscape-5.jpg";
import landscape6 from "../../public/landscape-6.jpg";
export default function Grid(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>Grid Layout</h1>
                    </div>
                </div>
            </div>
            
            <div className="angry-grid">
                <div id="item-0" style={{backgroundImage:`url(${landscape2.src})`,width: '100%',height: '100%', backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}></div>
                <div id="item-1" style={{backgroundImage:`url(${landscape3.src})`,width: '100%',height: '100%', backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}></div>
                <div id="item-2" style={{backgroundImage:`url(${landscape1.src})`,width: '100%',height: '100%', backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}></div>
                <div id="item-3" style={{backgroundImage:`url(${landscape4.src})`,width: '100%',height: '100%', backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}></div>
                <div id="item-4" style={{backgroundImage:`url(${landscape5.src})`,width: '100%',height: '100%', backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}></div>
                <div id="item-5" style={{backgroundImage:`url(${landscape6.src})`,width: '100%',height: '100%', backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}></div>
            </div>
        </>
    );
}