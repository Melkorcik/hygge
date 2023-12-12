import './style/ComponentOne.css';
import './style/MediaOne.css';
interface Props{
        id:string,
        imgUrl:string,
        title:string,
        titleText:string,
        text:string,
        icon_1:string,
        icon_2:string,
        icon_3:string
}

function Content({id, imgUrl, title, titleText, text, icon_1, icon_2, icon_3}:Props){
    return<div onWheel={e=> localStorage.setItem("coordY", e.deltaY.toString())} className={id}>

        <img src={imgUrl} alt="img" className="img-main"/>
        <h3 className="title-h3-cmp-one">{title}</h3>
        <p className="text-title-cmp-one">{titleText}</p>
        <p className="text-cmp-one">{text}</p>

        <div className="icons-cmp-one">
            <img src={icon_1} alt="icon 1" className="icon-1-cmp-one"/>
            <img src={icon_2} alt="icon 2" className="icon-2-cmp-one"/>
            <img src={icon_3} alt="icon 2" className="icon-3-cmp-one"/>
        </div>

    </div>
}
export default Content;