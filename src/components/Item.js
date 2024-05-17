import React from 'react';
import {Link} from "react-router-dom";

export const Item = ({itemParams}) => {
  return(
    <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-1 mb-4">
      <div className="card bg-dark text-white">
        <img src={itemParams.image} alt="Miniatura"/>
        <div className="card-body">
          <h5 className="card-title">{itemParams.name}</h5>
          <p className="card-text">{itemParams.synopsis}</p>
          <Link to={'/ver/'+itemParams.id} className="btn btn-primary float-end">
            <i className="icon-control-play icons"></i> Ver ahóra
          </Link>
        </div>
      </div>
    </div>
  )
}