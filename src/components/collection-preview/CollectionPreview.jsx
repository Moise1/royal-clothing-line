import React from 'react';
import {CollectionItem} from '../collection-item/CollectionItem';
import '../../css/collection-preview.css';

export const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...rest }) => (
          <CollectionItem key={id} {...rest} />
        ))}
    </div>
  </div>
);
