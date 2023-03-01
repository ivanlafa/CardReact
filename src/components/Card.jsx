import React from "react";

export const Card = ({ title = "", image = "", text = "", counterValue="" }) => {
  return (
    <div class="col-md-4">
      <div class="card" style={ {width: "20rem", height: "30rem"} }>
        <img src={ image } class="card-img-top" alt={ title } style={ {height: "40%"} } />
          <div class="card-body" style={ {height: "60%"} }>
            <h4 class="card-title">{ title }</h4>
            <h5 class="card-subtitle mb-2 text-muted"> { counterValue } </h5>
            <p class="card-text" style={ {height: "8rem", overflowY: "scroll"} }>{ text }</p>
            <a href="https://www.cuc.edu.co/" class="btn mr-2"><i class="fas fa-link"></i> Details</a>
          </div>
      </div>
    </div>
  );
};
