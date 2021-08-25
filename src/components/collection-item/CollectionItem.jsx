import React from 'react';
import '../../css/collection-item.css';
import { CustomButton } from '../custom-button/CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/actions/cart';

export const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton
        inverted
        onClick={() => dispatch(addItem(item))}>
        Add to cart
    </CustomButton>
    </div>
  )
};

