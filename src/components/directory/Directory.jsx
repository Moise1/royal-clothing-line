import React, { useState } from 'react'
import '../../css/directory.css';
import {MenuItem} from '../menu-item/MenuItem';
import {shopData} from '../../data/shopData';

export const Directory = () => {
    const [sections, setSections] = useState(shopData)
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...rest }) => (
                <MenuItem key={id} {...rest}/>
            ))}
        </div>
    )
}
