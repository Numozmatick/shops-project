import React from 'react';
import './style-SideLeftShopsShop.css'

const SideLeftShopsShop = (props) => {
    return (
        <div>
            <div className="card" style={{width: '20rem'}}>
                <div className="block-face">
                    <img className="card-img-top w-50 h-50" src={props.img} alt={props.alt}/>
                    <div className="card-block">
                        <h4 className="card-block-title">{props.name}</h4>
                        <p className="card-block-text">{props.text}</p>
                        <p className="card-block-description">{props.description}</p>
                        <a href="#" className="card-block-btn btn btn-dark">Перейти</a>
                    </div>
                </div>
            </div>
            <style jsx={true.toString()}>{`
        .card {
          display:flex;
          flex-direction:column;
        }
        .block-face {
        display:flex;
        flex-direction:row-reverse;
        justify-content:space-between;
        margin:10%;
        }
      `}

            </style>
        </div>
    )


};
export default SideLeftShopsShop;
