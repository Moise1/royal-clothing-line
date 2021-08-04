import React, { useState } from 'react'
import '../../css/directory.css';
import {MenuItem} from '../menu-item/MenuItem';

export const Directory = () => {
    const [sections, setSections] = useState([
        {
            title: 'caps',
            imageUrl: 'https://bit.ly/3fbNSJN',
            id: 1,
            linkUrl: 'hats'
        },
        {
            title: 'shirts',
            imageUrl: 'https://wrctr.co/3BXJ8kG',
            id: 2,
            linkUrl: ''

        },
        {
            title: 'sneakers',
            imageUrl: 'https://bit.ly/3797D0b',
            id: 3,
            linkUrl: ''

        },
        {
            title: "women's",
            imageUrl: 'https://bit.ly/3fgCAE4',
            size: 'large',
            id: 4,
            linkUrl: ''

        },
        {
            title: "men's",
            imageUrl: 'https://bit.ly/3C2Vatd',
            size: 'large',
            id: 5,
            linkUrl: ''

        }
    ])
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...rest }) => (
                <MenuItem key={id} {...rest}/>
            ))}
        </div>
    )
}
