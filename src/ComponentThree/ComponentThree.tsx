import ContainerMap from "./Map/ContainerMap";
import ChangeCards from "./Infobloks/ChangeCards";
import Statistic from "./Statistic/Statistic";
import './style/MediaThree.css';
function ComponentThree(){
    return<div className="container-box-three">
        <ContainerMap/>
        <ChangeCards/>
        <Statistic/>
    </div>
}

export default ComponentThree;