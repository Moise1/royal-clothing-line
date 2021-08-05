import React, {useState} from 'react'
import {dataCollection} from '../../data/dataCollection';
import {CollectionPreview} from '../../components/collection-preview/CollectionPreview';

export const Shop = () => {
    const [collections, setCollections] = useState(dataCollection)
    return (
        <div className="shop-page">
           {collections.map(({id, ...rest})=>(
            <CollectionPreview key={id} {...rest} />
           ))}
        </div>
    ) 
}
