import { useCart } from '../hooks/useCart'
import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './icons'

export function Products ({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {
          products.map(p => {
            const isProductInCart = checkProductInCart(p)

            return (
              <li key={p.id}>
                <img src={p.thumbnail} alt={p.title} />
                <div>
                  <strong>{p.title}</strong> - ${p.price}
                </div>
                <div>
                  <button
                    onClick={() => {
                      isProductInCart
                        ? removeFromCart(p)
                        : addToCart(p)
                    }}
                    className={isProductInCart ? 'inCart' : ''}
                  >
                    {
                      isProductInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
