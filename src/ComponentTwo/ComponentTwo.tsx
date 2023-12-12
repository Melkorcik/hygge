import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import IMG from '../src';
import './style/ComponentTwo.css';
import './style/MediaTwo.css';

localStorage.setItem("coordY", String(0));
let top = 1, bottom = 1;
function ComponentTwo(){
    var value:number = 0;

    const[Px, setPx] = useState(0);  
    const PlusOrMinus = useMemo(()=>{
      value += Px;
    },[Px])
  
    useEffect(()=>{      
        const handleScroll = () => {  
            const container_scroll:any = document.querySelector('.scroll-bar-container')?.getBoundingClientRect().top;
            localStorage.setItem("container_scroll", container_scroll);
            if(Number(localStorage.getItem("container_scroll")) >= -110 && Number(localStorage.getItem("container_scroll")) <= 486){// хорошо
                console.log('NORMAL');
                if(Number(localStorage.getItem("coordY")) > 0){
                    if(top !== 1){
                        value+=6;
                        setPx(value);
                    }
                    top=0;
                }
                if(Number(localStorage.getItem("coordY")) < 0){
                    if(bottom !== 1){
                        value-=6;
                        setPx(value);
                    }
                    bottom=0; 
                }
            }else{
                value = 0;
            }
        };
            window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[])

    return<div onWheel={e => {localStorage.setItem("coordY", e.deltaY.toString())}} className="container-cmp-two">
        <div className="scroll-bar-container">
            <div className="index-container">
                <div className='list-words'>
                    <motion.div 
                        initial={{x:1360}} 
                        animate={{transform:'translateX(-384%)'}} 
                        transition={{duration:60, repeat:Infinity}}
                        style={{fontSize:'29px',color:'white', fontFamily:'Arial'}}
                    >
                        <div className='fast-string-words'>
                                <div className='word-two-1'>"Cras justo odio, dapibus facilisis in, egestas eget quam nisl consectetur"</div>
                                <div className='word-two-2'>"Praesent commodo cursus magna, vel scelerisque"</div>
                                <div className='word-two-3'>"Anean eu leo quam. Donec set odio dui"</div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <img src={IMG.img_hidden} alt="cup" style={{
                transform: `translate3d(0px,${value}px, 0px)`
            }} className="img-background"/>               
        </div>
    </div>
}
/**
 * Cras justo odio, dapibus facilisis in, egestas eget quam nisl consectetur 
 * Praesent commodo cursus magna, vel scelerisque 
 * Anean eu leo quam. Donec set odio dui;
 */
export default ComponentTwo;