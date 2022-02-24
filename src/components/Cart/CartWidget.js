import React from 'react'
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';

const CartWidget = () => {
    return (
        <div>
            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined/>
            </Badge>
        </div>
    )
}

export default CartWidget