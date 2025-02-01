import './Cart.css'
import { useId } from 'react'
import { ClearCartIcon, CartIcon } from './icons'
import { useCart } from '../hooks/useCart'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {cart.map(p => {
            return (
              <CartItem
                key={p.id}
                addToCart={() => addToCart(p)}
                {...p}
              />
            )
          })}
        </ul>

        <footer>
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        </footer>
      </aside>
    </>
  )
}
