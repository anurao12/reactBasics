import React from 'react';
import {SHOP_DATA} from './shop.data';
import {CollectionPreview} from '../collection-preview/collectionPreview.component';

class shopPage extends React.Component {
    constructor(){
        super();
        this.state = { 
            collections: SHOP_DATA
        }   
    }

    render(){
        const {collections} = this.state;
              return(
            <div className=''>
            {
                collections.map(({id, ...otherCollectionProps})=>
                    <CollectionPreview key={id} {...otherCollectionProps} />
                    )
                 
            }
           
            </div>
        )
    }
}

export default shopPage;