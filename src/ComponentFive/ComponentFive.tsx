import BACKGROUND from "./backgrounddd/src";
import './style/ComponentFive.css';
import './style/MediaFive.css';

function ComponentTen(){
    const arrCtegory = ['Web Design (21)', 'Photography (19)', 'Graphic Design (16)', 'Manipulation (15)', 'Motion Graphics (12)'];
    return <div className="container-ten">
        <div className="mini-component-ten-one">
            <div className="box-ten-one">
                <h3 className="title-ten-1">ELSEWHERE</h3>
                <p className="text-ten-1">Vestibulum id ligula porta felis euismod semper.</p>
                <div className="box-icons-ten">
                    <img src={BACKGROUND.img_ten_1} className="icon-ten-one"/>
                    <img src={BACKGROUND.img_ten_2} className="icon-ten-two"/>
                    <img src={BACKGROUND.img_ten_3} className="icon-ten-three"/>
                    <img src={BACKGROUND.img_ten_4} className="icon-ten-four"/>
                    <img src={BACKGROUND.img_ten_5} className="icon-ten-five"/>
                    <img src={BACKGROUND.img_ten_6} className="icon-ten-six"/>
                </div>
            </div>

            <div className="box-ten-two">
                    <h3 className="title-ten-2">SUBSCRIBE</h3>
                    <p className="text-ten-2">Cum sociis natoque penatibus et magnis dis parturient.</p>
                    <div className="box-input-ten">
                        <input type="email" className="email-text" placeholder="Enter email"/><button className="btn-join">JOIN</button>
                    </div>                    
            </div>

            <div className="box-ten-three">
                <h3 className="title-ten-3">TAGS</h3>
                <p className="text-ten-3">
                    <span className="span-ten-1">blogroll</span> <span className="span-ten-2">daily</span> <span className="span-ten-3">dialog</span> <span className="span-ten-4">gallery</span> <span className="span-ten-5">journal</span> <span className="span-ten-6">link</span> <span className="span-ten-7">motion</span> <span className="span-ten-8">music</span> <span className="span-ten-9">photo</span> <span className="span-ten-10">professional</span> <span className="span-ten-11">quotation</span> <span className="span-ten-12">show</span> <span className="span-ten-13">sound</span>
                </p>
            </div>
        </div>
        
        <div className="mini-component-ten-two">
            <div className="mini-div-ten-1">
                <img src={BACKGROUND.img_hugge} alt="hugge" style={{height: '25px', width: '86px'}}></img>
                <p className="text-mini-div-1">
                    Aenean lacinia bibendum nulla sed leo posuere 
                    erat a ante venenatis dapibus posuere velit 
                    aliquet. Donec ullamcorper metus auctor fringi. 
                    Nullam quis risus.
                </p>
            </div>

            <div className="mini-div-ten-2">
                <div className="mini-div-ten-2-1">
                      <h3 className="title-mini-div-2">POPULAR POSTS</h3>
                      <div className="div-info-te-S">
                        <p className="text-mini-div-2">Vivamus sagittis lacus vel augue metus</p>
                        <span style={{position: 'relative', marginLeft: '16px', fontSize: '13px'}} className="box-oclock"><img src={BACKGROUND.img_oclock} style={{position: 'absolute',height: '16px', width: '15px', left: '-19px', top: '2px'}}/>3th Oct 2012</span>                            
                      </div>
                      <div style={{lineHeight: '12px'}}>
                      <p className="text-mini-div-3">Scelerisque nisl consectetur et</p>
                        <span style={{position: 'relative', marginLeft: '16px', fontSize: '13px'}} className="box-oclock"><img src={BACKGROUND.img_oclock} style={{position: 'absolute',height: '16px', width: '15px', left: '-19px', top: '2px'}}/>28th Sep 2012</span> 
                      </div>
                </div>
            </div>

            <div className="mini-div-ten-3">
                <h3 style={{ color:'aliceblue'}}>GET IN TOUCH</h3>
                <p style={{width: '300px', color: 'rgb(184, 184, 184)'}}>
                    Fusce dapibus, tellus commodo, tortor mauris condimentum utellus fermentum.
                </p>

                <span style={{position: 'relative', marginLeft: '16px', paddingLeft: '6px', fontSize: '17px', color:'rgb(184, 184, 184)'}}><img src={BACKGROUND.img_loc} style={{position: 'absolute', left: '-22px', top: '-2px'}}/> Moonshine St. 14/05 Light City</span><br/>
                <span style={{position: 'relative', marginLeft: '16px', paddingLeft: '6px', fontSize: '17px', color:'rgb(184, 184, 184)'}}><img src={BACKGROUND.img_phone} style={{position: 'absolute', left: '-22px', top: '-2px'}}/> +00 (123) 456 78 90</span><br/>
                <span className="text-email-ten"><img src={BACKGROUND.img_conver} style={{position: 'absolute', left: '-22px', top: '-.3px'}}/> first.last@email.com</span>
            </div>

            <div className="mini-div-ten-4">
                <h3 style={{ color:'aliceblue'}}>CATEGORIES</h3>
                    <ul style={{marginTop: '-6px', marginLeft: '-22px', fontSize: '16px', color: 'rgb(184, 184, 184)'}}>
                        {
                            arrCtegory.map((el, index)=>{
                                return <li key={index} className="li-ten">{el}</li>
                            })
                        }
                    </ul>
            </div>
        </div>

        <div className="mini-component-ten-three">
            <p className="Year-2015">© 2015 Hygge. All rights reserved. Theme by elemis.</p>
            <div className="list-ten">
                <h5 className="list-ten-one">HOME</h5>
                <h5 >|</h5>
                <h5 className="list-ten-two">ABOUT</h5>
                <h5>|</h5>
                <h5 className="list-ten-three">PORTFOLIO</h5>
                <h5>|</h5>
                <h5 className="list-ten-four">BLOG</h5>
                <h5>|</h5>
                <h5 className="list-ten-six">CONTACT</h5>
            </div>
        </div>
    </div>
}

export default ComponentTen;