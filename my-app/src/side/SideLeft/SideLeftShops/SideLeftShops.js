import React from 'react';
import SideLeftShopsShop from './SideLeftShopsShop/SideLeftShopsShop';

const SideLeftShops = (props) => {
  return (
    <div>
      {props.marketplaces.map((marketplace) =>
        <SideLeftShopsShop key={marketplace.id} name={marketplace.title} img={marketplace.logoUrl} description={marketplace.description} />
      )}
    </div>
  )
};

export default SideLeftShops;
