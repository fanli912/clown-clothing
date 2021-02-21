import React from 'react';
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
    <soan className='item-count'>{itemCount}</soan>

  </div>
)

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})


const mapDispatchToProps = dispatch => (
  {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
