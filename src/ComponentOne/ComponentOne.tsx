import React from "react";
import IMG from "../src";
import './style/ComponentOne.css';
import './style/MediaOne.css';
const Content = React.lazy(()=>import('./Content'));


function ComponentOne(){
    interface TupeUserObject{
        id:string,
        imgUrl:string,
        title:string,
        titleText:string,
        text:string,
        icon_1:string,
        icon_2:string,
        icon_3:string
    };

    const Data:TupeUserObject[] = [
        {id:'id_1', imgUrl:`${IMG.img_404any}`, title:'NIKOLAS BROOTEN',titleText:'Sales Manager',text:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo.',icon_1:`${IMG.icon1}`,icon_2:`${IMG.icon2}`,icon_3:`${IMG.icon3}`},
        {id:'id_2', imgUrl:`${IMG.img_404any}`, title:'CORISS AMBADY',titleText:'Marketing Specialist',text:'Morbi leo risus, porta ac consectetur ac, vestibulum at eros sed posuere quam.',icon_1:`${IMG.icon4}`,icon_2:`${IMG.icon5}`,icon_3:`${IMG.icon6}`},
        {id:'id_3', imgUrl:`${IMG.img_404any}`, title:'BARCLAY WIDERSKI',titleText:'Computer Engineer',text:'Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis.',icon_1:`${IMG.icon1}`,icon_2:`${IMG.icon2}`,icon_3:`${IMG.icon3}`},
        {id:'id_4', imgUrl:`${IMG.img_404any}`, title:'ELSIE SPEAR',titleText:'Strategy Director',text:'Maecenas faucibus mollis interdum. Aenean eu leo quam ornare sem lacinia.',icon_1:`${IMG.icon4}`,icon_2:`${IMG.icon5}`,icon_3:`${IMG.icon6}`}
    ];
      
    return <div onWheel={e=> localStorage.setItem("coordY", e.deltaY.toString())} className="box-cards" style={{width:'1500px',height:'660px', position:'absolute', top:'53px'}}>
        <div style={{position:'absolute', left:'396px', paddingTop:'66px'}}>
            {
                Data.map(el=>{
                    return <Content key={el.id} id={el.id} imgUrl={el.imgUrl} title={el.title} titleText={el.titleText} text={el.text} icon_1={el.icon_1} icon_2={el.icon_2} icon_3={el.icon_3} />;
                })
            } 
        </div>     
    </div>
}

export default ComponentOne;