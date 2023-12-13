import {useState, useEffect} from "react";
import { motion } from "framer-motion";
import './style/ComponentFour.css';
import './style/MediaFour.css';

localStorage.setItem("index",String(0));

const LinksPictures = {
    img_one: require('../MyImages/c1.png'),
    img_two: require('../MyImages/c2.png'),
    img_three: require('../MyImages/c3.png'),
    img_four: require('../MyImages/c4.png'),
    img_five: require('../MyImages/c6.png'),
    img_six: require('../MyImages/c8.png')
};

function NextEl(){    
    const ArrayImage:string[] = [
     `${LinksPictures.img_one}`,
     `${LinksPictures.img_two}`,
     `${LinksPictures.img_three}`,
     `${LinksPictures.img_four}`,
     `${LinksPictures.img_five}`,
     `${LinksPictures.img_six}`
     ];

    const[ind, setind] = useState(0);

    useEffect(()=>{
        const time = setInterval(()=>{
            let value:number = Number(localStorage.getItem("index"));
            value++;
            localStorage.setItem("index", value.toString());
            if(value < 6){
                setind(value);
            }else{
                value = 0;
                setind(value);
                localStorage.setItem("index",String(0));
            }            
        },6000)
        return () => {
            clearInterval(time);
            localStorage.clear();
        }
    },[]);

    return<div>
        <div className="container-go">
            <motion.img
                src={ArrayImage[ind]}
                animate={{x:[-120,500]}}
                transition={{duration:6, repeat:Infinity}}
                className="logo-companies"
            />
        </div>
    </div>
}

export default NextEl;
