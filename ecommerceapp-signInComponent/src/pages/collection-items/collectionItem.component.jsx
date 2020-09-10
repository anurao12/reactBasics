import React from 'react';
import '../collection-items/collection.styles.scss';

export const CollectionItems = ({ name, imageUrl, price}) =>(
    <div className='collection-item'>

         <div className='image' 
              style={{backgroundImage: `url(${imageUrl})`}}
          />

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>  
    </div>
)