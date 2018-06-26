require('./PortfolioItem.scss');

import React from 'react';

const PortfolioItem = () => {
    return (
        <div className="PortfolioItem" >
            <div className="PortfolioItemThumbnail" ></div>
            <div className="PortfolioItemDescription" >
                <h3>Title</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, quos cum nam exercitationem voluptatum maxime a incidunt, quas velit excepturi nisi voluptatibus sed cupiditate, perferendis laudantium ratione sunt vitae unde!</p>
            </div>
        </div>
    )
}

export default PortfolioItem;
