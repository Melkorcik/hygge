function Statistic(){
    return<div className="container-statistic">
        <h3 className="title-info-bloks-2">OUR SKILLS</h3>
        <p className="statistic-text">
            Duis non lectus sit amet est imperdiet cursus elementum vitae eros. 
            Etiam adipiscingmorbi vitae magna tellus, ac mattis urna phasellus rhoncus.
        </p>
        <div className="container-diagramm">
            <div>
                <div style={{display:'flex',width:'130px',justifyContent:'space-between'}}>
                    <h4 style={{color:'grey',fontFamily:'Arial'}}>CSS/HTML</h4>
                    <h4 style={{color:'green',fontFamily:'Arial'}}> - 90%</h4>
                </div>
                
                <span className="empty-diagramm-container">
                    <span className="green-line"></span>
                </span>
            </div>
            
            <div>
                <div style={{display:'flex',width:'100px',justifyContent:'space-between'}}>
                    <h4 style={{color:'grey',fontFamily:'Arial'}}>jQuery</h4>
                    <h4 style={{color:'green',fontFamily:'Arial'}}> - 80%</h4>
                </div>
                
                <span className="empty-diagramm-container-2">
                    <span className="green-line-2"></span>
                </span>
            </div>

            <div>
                <div style={{display:'flex',width:'130px',justifyContent:'space-between'}}>
                    <h4 style={{color:'grey',fontFamily:'Arial'}}>Wordpress </h4>
                    <h4 style={{color:'green',fontFamily:'Arial'}}> - 85%</h4>
                </div>
                
                <span className="empty-diagramm-container-3">
                    <span className="green-line-3"></span>
                </span>
            </div>

            <div>
                <div style={{display:'flex',width:'80px',justifyContent:'space-between'}}>
                    <h4 style={{color:'grey',fontFamily:'Arial'}}>SEO</h4>
                    <h4 style={{color:'green',fontFamily:'Arial'}}> - 50%</h4>
                </div>
                
                <span className="empty-diagramm-container-4">
                    <span className="green-line-4"></span>
                </span>
            </div>
        </div>
    </div>
}

export default Statistic;