import NextEl from "./ComponentFour";
import './style/ComponentFour.css';
import './style/MediaFour.css';

function ComponentFourMain(){
    return<div className="container-main-four">
        <div className="content-div-four">
            <h3 className="content-title-four">OUR CLIENTS</h3>
            <p className="content-text-four">companies we worked with</p>
        </div>
        <NextEl/>
    </div>
}

export default ComponentFourMain;