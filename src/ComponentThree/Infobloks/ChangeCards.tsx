import {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../style/ComponentThree.css';
import INFO from "./ObjectInfo";

interface IColors{
    thisIs:string,
    tabbed:string,
    contenT:string
}

var ObjColos:IColors = {
    thisIs:'black',
    tabbed:'black',
    contenT:'black'
}

function ChangeCards(){
    const[state, setState] = useState(0);
    const[startState, setStartState] = useState('block');
    const[displayFirst, setDisplayFirst] = useState('none');
    const[displaySecond, setDisplaySecond] = useState('none');
    const[displayThird, setDisplayThird] = useState('none');
    function hadleClick(e:any){
        setStartState('none');

        let key: keyof IColors;
        for (key in ObjColos) {
            key === e.target.className ? ObjColos[key] = 'green' : ObjColos[key] = 'black';
        }

        switch (e.target.className) {
            case 'thisIs':
                setState(1); setDisplayFirst('block'); setDisplaySecond('none'); setDisplayThird('none');
            break;
            case 'tabbed':
                setState(2); setDisplayFirst('none'); setDisplaySecond('block'); setDisplayThird('none');
            break;
            case 'contenT':
                setState(3); setDisplayFirst('none'); setDisplaySecond('none'); setDisplayThird('block');
            break;
            default:
                break;
        }
    }
    
    return<div className="box-info-bloks">
        <h3 className="title-info-bloks">WHY CHOOSE US?</h3>
        <div className="bloks-titles">
            <span onClick={hadleClick} className="thisIs" style={{color:`${ObjColos.thisIs}`}}>THIS IS</span>
            <span onClick={hadleClick} className="tabbed" style={{color:`${ObjColos.tabbed}`}}>TABBED</span>
            <span onClick={hadleClick} className="contenT" style={{color:`${ObjColos.contenT}`}}>CONTENT</span>
        </div>

           <div className="container-start" 
                style={{
                    display:`${startState}`,
                    paddingRight:'41px',
                    border:'1px solid rgb(181, 177, 177)',
                }}
            >{INFO.tag_start}</div>
           
        <div className="this-is-container" style={{display:`${displayFirst}`}}>
            <AnimatePresence>
            {
                  state === 1 && <motion.div 
                    initial = {{height:0, opacity: 0}}
                    animate = {{height:'auto', opacity: 1}}
                    exit = {{opacity:0}} 
                    transition = {{duration: 0.6}}
                    style={{
                        paddingRight:'41px',
                        border:'1px solid rgb(181, 177, 177)',
                        overflow: 'hidden'
                    }}
                    >
                        {INFO.tag_one}
                    </motion.div> 
            }  
            </AnimatePresence>          
        </div>

        <div className="this-is-containe-2" style={{display:`${displaySecond}`}}>
            <AnimatePresence>
            {
                  state === 2 && <motion.div 
                    initial = {{height:0, opacity: 0}}
                    animate = {{height:'auto', opacity: 1}}
                    exit = {{opacity:0}} 
                    transition = {{duration: 0.3}}
                    style={{
                        paddingRight:'41px',
                        border:'1px solid rgb(181, 177, 177)',
                        overflow: 'hidden'
                    }}
                    >
                        {INFO.tag_two}
                    </motion.div> 
            }  
            </AnimatePresence>          
        </div>

        <div className="this-is-container-3" style={{display:`${displayThird}`}}>
            <AnimatePresence>
            {
                  state === 3 && <motion.div 
                    initial = {{height:0, opacity: 0}}
                    animate = {{height:'auto', opacity: 1}}
                    exit = {{opacity:0}} 
                    transition = {{duration: 0.3}}
                    style={{
                        paddingRight:'41px',
                        border:'1px solid rgb(181, 177, 177)',
                        overflow: 'hidden'
                    }}
                    >
                        {INFO.tag_three}
                    </motion.div> 
            }  
            </AnimatePresence>          
        </div>
    </div>
}

export default ChangeCards;