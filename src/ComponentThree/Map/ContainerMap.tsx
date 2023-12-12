import '../style/ComponentThree.css';
import IMG from '../../src';
import Map from './Map';
function ContainerMap(){
    return<div className="box-map">
        <h3 className="title-map">CONTACT US</h3>
        <p className="text-map">Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Map/>
        <div style={{marginTop:'33px'}}>
            <div className='local'>
                <img src={IMG.icon_local} alt="img local" className='img-local'/>
                <p className='loc'>Moonshine St. 14/05 Light City</p>
            </div>
            <div className='phone'>
                <img src={IMG.icon_phone} alt="img phone" className='img-phone'/>
                <p className='ph'>+00 (123) 456 78 90</p>
            </div>
            <div className='convert'>
                <img src={IMG.icon_convert} alt="img convert" className='img-convert'/>
                <p className='con'>first.last@email.com</p>
            </div>
        </div>
</div>
}

export default ContainerMap;