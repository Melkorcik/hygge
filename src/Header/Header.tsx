import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IMG from "../src";
import './style/Header.css';
import './style/HeaderMedia.css';

function Header(){
    const[linkHome, setlinkHome] = useState("link-one-home-close");
    const[linkSliders, setlinkSliders] = useState("link-one-sliders-close");
    const[linkHeaders, setlinkHeaders] = useState("link-one-headers-close");
    const[linkPortfolio, setlinkPortfolio] = useState("link-one-portfolio-close");
    const[linkPagers, setlinkPagers] = useState("link-one-pagers-close");
    const[linkFeatures, setlinkFeatures] = useState("link-one-features-close");

    const[colorHome, setColorHome] = useState('black');
    const[colorSliders, setColorSliders] = useState('black');
    const[colorHeaders, setColorHeaders] = useState('black');
    const[colorPortfolio, setColorPortfolio] = useState('black');
    const[colorPagers, setColorPagers] = useState('black');
    const[colorFeatures, setColorFeatures] = useState("black");
    
    const[stateDisplay, setStateDisplay] = useState(false);
    const[stateHamburger, setStateHamburger] = useState('burger-btn-open');
    const[stateHamburgerClose, setStateHamburgerClose] = useState('burger-btn-close-CL');

    const[li_ul_home, set_li_ul_home] = useState('none');
    const[li_ul_sliders, set_li_ul_sliders] = useState('none');
    const[li_ul_headers, set_li_ul_headers] = useState('none');
    const[li_ul_portfolio, set_li_ul_portfolio] = useState('none');
    const[li_ul_pagers, set_li_ul_pagers] = useState('none');
    const[li_ul_features, set_li_ul_features] = useState("none");

    const Home = ['home layout 1','home layout 2','home layout 3','home layout 4','home layout 5','home layout all','scroll animation','onepage layout'];
    const Sliders = ['fullscreen slider','fullwidth slider','boxed slider'];
    const Headers = ['transparent','solid','detailed'];
    const Portfolio = ['portfolio','portfolio 2','portfolio 3','portfolio post','portfolio post 2','portfolio post 3','portfolio post 4','portfolio post 5','portfolio post 6','portfolio post 7'];
    const Pagers = ['about 1','about 2','services 1','services 2','FAQ','contact','contact 2'];
    const Features = ['elements','charts','pircing tables','headings','disqse','lulu icons','budicon icons','fontello icons'];

    function handleMouseEnter(e:any){
            if (e.target.className==="link-one" || e.target.className==="li-home-header"){
                setlinkHome("link-one-home-open"); setColorHome('rgb(73, 188, 73)');                
                setlinkSliders("link-one-sliders-close"); setColorSliders('black');
                setlinkPortfolio("link-one-portfolio-close"); setColorPortfolio('black');
                setlinkPagers("link-one-pagers-close"); setColorPagers('black');
                setlinkFeatures("link-one-features-close"); setColorFeatures('black');
                setlinkHeaders("link-one-headers-close"); setColorHeaders('black');
            }
            if (e.target.className==="link-two" || e.target.className==="li-sliders-header"){
                setlinkSliders("link-one-sliders-open"); setColorSliders('rgb(73, 188, 73)');
                setlinkHome("link-one-home-close"); setColorHome('black');
                setlinkHeaders("link-one-headers-close"); setColorHeaders('black');
                setlinkPortfolio("link-one-portfolio-close"); setColorPortfolio('black');
                setlinkPagers("link-one-pagers-close"); setColorPagers('black');
                setlinkFeatures("link-one-features-close"); setColorFeatures('black');
            }
            if (e.target.className==="link-three" || e.target.className==="li-headers-header"){
                setlinkHeaders("link-one-headers-open"); setColorHeaders('rgb(73, 188, 73)');
                setlinkHome("link-one-home-close"); setColorHome('black');
                setlinkSliders("link-one-sliders-close"); setColorSliders('black');
                setlinkPortfolio("link-one-portfolio-close"); setColorPortfolio('black');
                setlinkPagers("link-one-pagers-close"); setColorPagers('black');
                setlinkFeatures("link-one-features-close"); setColorFeatures('black');
            }
            if (e.target.className==="link-four" || e.target.className==="li-portfolio-header"){
                setlinkPortfolio("link-one-portfolio-open"); setColorPortfolio('rgb(73, 188, 73)');
                setlinkHome("link-one-home-close"); setColorHome('black');
                setlinkSliders("link-one-sliders-close"); setColorSliders('black');
                setlinkHeaders("link-one-headers-close"); setColorHeaders('black');
                setlinkPagers("link-one-pagers-close"); setColorPagers('black');
                setlinkFeatures("link-one-features-close"); setColorFeatures('black');
            }
            if (e.target.className==="link-five" || e.target.className==="li-pagers-header"){
                setlinkPagers("link-one-pagers-open"); setColorPagers('rgb(73, 188, 73)');
                setlinkHome("link-one-home-close"); setColorHome('black');
                setlinkSliders("link-one-sliders-close"); setColorSliders('black');
                setlinkHeaders("link-one-headers-close"); setColorHeaders('black');
                setlinkPortfolio("link-one-portfolio-close"); setColorPortfolio('black');
                setlinkFeatures("link-one-features-close"); setColorFeatures('black');
            }
            if (e.target.className==="link-six" || e.target.className==="li-features-header"){
                setlinkFeatures("link-one-features-open"); setColorFeatures('rgb(73, 188, 73)');
                setlinkHome("link-one-home-close"); setColorHome('black');
                setlinkSliders("link-one-sliders-close"); setColorSliders('black');
                setlinkHeaders("link-one-headers-close"); setColorHeaders('black');
                setlinkPortfolio("link-one-portfolio-close"); setColorPortfolio('black');
                setlinkPagers("link-one-pagers-close"); setColorPagers('black');
            }
    }

    function handleMouseLeave(e:any){
        if (e.target.className==="link-one"||e.target.className==="li-home-header"){
            setlinkHome("link-one-home-close"); setColorHome('black');
        }
        if (e.target.className==="link-two" || e.target.className==="li-sliders-header"){
            setlinkSliders("link-one-sliders-close"); setColorSliders('black');
        }
        if (e.target.className==="link-three" || e.target.className==="li-headers-header"){
            setlinkHeaders("link-one-headers-close"); setColorHeaders('black');
        }
        if (e.target.className==="link-four" || e.target.className==="li-portfolio-header"){
            setlinkPortfolio("link-one-portfolio-close"); setColorPortfolio('black');
        }
        if (e.target.className==="link-five" || e.target.className==="li-pagers-header"){
            setlinkPagers("link-one-pagers-close"); setColorPagers('black');
        }
        if (e.target.className==="link-six" || e.target.className==="li-features-header"){
            setlinkFeatures("link-one-features-close"); setColorFeatures('black');
        }
    }

    function handleClickOnHamburger(e:any){
        if(e.target.className === "burger-btn-open"){
            setStateDisplay(true);
            setStateHamburger('burger-btn-open-CL');
            setStateHamburgerClose('burger-btn-close');
        }else if(e.target.className === "burger-btn-close"){
            setStateDisplay(false);
            setStateHamburger('burger-btn-open');
            setStateHamburgerClose('burger-btn-close-CL');
        }

    }
     
    function handleClickMediaLists(e:any){
        e.target.attributes.class.nodeValue === "list-home" && li_ul_home === 'none' ? set_li_ul_home('block') : set_li_ul_home('none');
        e.target.attributes.class.nodeValue === "list-sliders" && li_ul_sliders === 'none' ? set_li_ul_sliders('block') : set_li_ul_sliders('none');
        e.target.attributes.class.nodeValue === "list-headers" && li_ul_headers === 'none' ? set_li_ul_headers('block') : set_li_ul_headers('none');
        e.target.attributes.class.nodeValue === "list-portfolio" && li_ul_portfolio === 'none' ? set_li_ul_portfolio('block') : set_li_ul_portfolio('none');
        e.target.attributes.class.nodeValue === "list-pagers" && li_ul_pagers === 'none' ? set_li_ul_pagers('block') : set_li_ul_pagers('none');
        e.target.attributes.class.nodeValue === "list-features" && li_ul_features === 'none' ? set_li_ul_features('block') : set_li_ul_features('none');
    }
    return<div onWheel={e=> localStorage.setItem("coordY", e.deltaY.toString())} className="main-conteiner-header" style={{position:"fixed", borderBottom: "1px solid rgb(229, 228, 228)", height: "60px", width: "100%", backgroundColor: "rgb(127, 123, 123)", zIndex:'11', marginTop:'-8px', marginLeft:'-8px'}}
    >
        <div className="container-header">
            <img src={IMG.img_hygge} alt="img" className="imgHugge"/>
        <header className="header">
               <nav style={{position:'relative'}}>
                    <ul className="box-ul">
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{color:`${colorHome}`}} className="link-one">HOME</li>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{color:`${colorSliders}`}} className="link-two">SLIDERS</li>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{color:`${colorHeaders}`}} className="link-three">HEADERS</li>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{color:`${colorPortfolio}`}} className="link-four">PORTFOLIO</li>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{color:`${colorPagers}`}} className="link-five">PAGERS</li>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{color:`${colorFeatures}`}} className="link-six">FEATURES</li>
                    </ul>
                    <div className={linkHome} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>    
                            {Home.map((el, index)=>{
                                return <li key={index} className="li-home-header" style={{border: '1px solid rgb(83, 79, 79)', paddingTop: '9px', paddingBottom: '13px'}}>{el}</li>
                            })}                            
                    </div>
                    <div className={linkSliders} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>    
                            {Sliders.map((el, index)=>{
                                return <li key={index} className="li-sliders-header" style={{border: '1px solid rgb(83, 79, 79)', paddingTop: '9px', paddingBottom: '13px'}}>{el}</li>
                            })}                            
                    </div>
                    <div className={linkHeaders} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>    
                            {Headers.map((el, index)=>{
                                return <li key={index} className="li-headers-header" style={{border: '1px solid rgb(83, 79, 79)', paddingTop: '9px', paddingBottom: '13px'}}>{el}</li>
                            })}                            
                    </div>
                    <div className={linkPortfolio} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>    
                            {Portfolio.map((el, index)=>{
                                return <li key={index} className="li-portfolio-header" style={{border: '1px solid rgb(83, 79, 79)', paddingTop: '9px', paddingBottom: '13px'}}>{el}</li>
                            })}                            
                    </div>
                    <div className={linkPagers} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>    
                            {Pagers.map((el, index)=>{
                                return <li key={index} className="li-pagers-header" style={{border: '1px solid rgb(83, 79, 79)', paddingTop: '9px', paddingBottom: '13px'}}>{el}</li>
                            })}                            
                    </div>
                    <div className={linkFeatures} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>    
                            {Features.map((el, index)=>{
                                return <li key={index} className="li-features-header" style={{border: '1px solid rgb(83, 79, 79)', paddingTop: '9px', paddingBottom: '13px'}}>{el}</li>
                            })}                            
                    </div>
                    <button onClick={handleClickOnHamburger} className={stateHamburger}>|||</button>
                    <button onClick={handleClickOnHamburger} className={stateHamburgerClose}>+</button>
                        <AnimatePresence>
                            {       
                                stateDisplay && (
                                    <motion.div 
                                        initial = {{height:0, opacity: 0}}
                                        animate = {{height:'auto', opacity: 1}}
                                        exit = {{height:0, opacity:0}} 
                                        transition = {{duration: 0.3}}
                                        style = {{overflow: 'hidden'}} 
                                        className="diffrend-menu">                                        
                                            <ul style={{
                                                listStyleType:'none', 
                                                backgroundColor:'rgb(45, 40, 40)', 
                                                paddingTop:'26px', 
                                                paddingBottom:'46px', 
                                                lineHeight: '46px',
                                                color:'white',
                                                fontSize:'14px',
                                                fontWeight:'bold'
                                            }} >
                                                <li onClick={handleClickMediaLists} className="list-home">HOME
                                                    <ul className="list-home-ul" style={{display:`${li_ul_home}`,listStyleType:'none', lineHeight:'41px', marginLeft:'-9px'}}>
                                                        <li className="media-li">home layout 1</li>
                                                        <li className="media-li">home layout 2</li>
                                                        <li className="media-li">home layout 3</li>
                                                        <li className="media-li">home layout 4</li>
                                                        <li className="media-li">home layout 5</li>
                                                        <li className="media-li">home layout all</li>
                                                        <li className="media-li">scroll animation</li>
                                                        <li className="media-li-isk">onepage layout</li>
                                                    </ul>
                                                </li>
                                                <li onClick={handleClickMediaLists} className="list-sliders">SLIDERS
                                                    <ul className="list-sliders-ul" style={{display:`${li_ul_sliders}`,listStyleType:'none', lineHeight:'41px', marginLeft:'-9px'}}>
                                                        <li className="media-li">fullscreen slider</li>
                                                        <li className="media-li">fullwidth slider</li>
                                                        <li className="media-li-isk">boxed slider</li>
                                                    </ul>
                                                </li>
                                                <li onClick={handleClickMediaLists} className="list-headers">HEADERS
                                                    <ul className="list-headers-ul" style={{display:`${li_ul_headers}`,listStyleType:'none', lineHeight:'41px', marginLeft:'-9px'}}>
                                                        <li className="media-li">transparent</li>
                                                        <li className="media-li">solid</li>
                                                        <li className="media-li-isk">detailed</li>
                                                    </ul>
                                                </li>
                                                <li onClick={handleClickMediaLists} className="list-portfolio">PORTFOLIO
                                                    <ul className="list-portfolio-ul" style={{display:`${li_ul_portfolio}`,listStyleType:'none', lineHeight:'41px', marginLeft:'-9px'}}>
                                                        <li className="media-li">portfolio</li>
                                                        <li className="media-li">portfolio 2</li>
                                                        <li className="media-li">portfolio 3</li>
                                                        <li className="media-li">portfolio post</li>
                                                        <li className="media-li">portfolio post 2</li>
                                                        <li className="media-li">portfolio post 3</li>
                                                        <li className="media-li">portfolio post 4</li>
                                                        <li className="media-li">portfolio post 5</li>
                                                        <li className="media-li">portfolio post 6</li>
                                                        <li className="media-li-isk">portfolio post 7</li>
                                                    </ul>
                                                </li>
                                                <li onClick={handleClickMediaLists} className="list-pagers">PAGERS
                                                    <ul className="list-pagers-ul" style={{display:`${li_ul_pagers}`,listStyleType:'none', lineHeight:'41px', marginLeft:'-9px'}}>
                                                        <li className="media-li">about 1</li>
                                                        <li className="media-li">about 2</li>
                                                        <li className="media-li">services 1</li>
                                                        <li className="media-li">services 2</li>
                                                        <li className="media-li">FAQ</li>
                                                        <li className="media-li">contact</li>
                                                        <li className="media-li-isk">contact 2</li>
                                                    </ul>
                                                </li>
                                                <li onClick={handleClickMediaLists} className="list-features">FEATURES
                                                    <ul className="list-feature-ul" style={{display:`${li_ul_features}`,listStyleType:'none', lineHeight:'41px', marginLeft:'-9px'}}>
                                                        <li className="media-li">elements</li>
                                                        <li className="media-li">charts</li>
                                                        <li className="media-li">pircing tables</li>
                                                        <li className="media-li">headings</li>
                                                        <li className="media-li">disqse</li>
                                                        <li className="media-li">lulu icons</li>
                                                        <li className="media-li">budicon icons</li>
                                                        <li className="media-li-isk">fontello icons</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                    </motion.div>
                            )}
                        </AnimatePresence>
                    </nav>
        </header>
    </div>
    </div>   
}
export default Header;