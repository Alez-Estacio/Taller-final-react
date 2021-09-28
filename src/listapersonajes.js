import React from "react";


const Listarpersonajes = ({name, tipo,describe,img}) => (
    
    
    <>
    
    
    <center>

    
    
    <div className="col-md-4" >
        <div className="card"  class="text-light bg-dark" style={{width: 'auto'}}>
        <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{name ? name : "name not found"}</p>
                <p className="card-text">{tipo}</p>
                <p className="card-text">{describe}</p>
                
                
            </div>
        </div>
    </div>
    </center>
    </>
);

export default Listarpersonajes;