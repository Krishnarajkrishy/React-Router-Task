import PropTypes from 'prop-types'
import CartItem from './CartItem'
import { Link } from 'react-router-dom';

const CartPage = ({ cart, removeFromCart}) => {
  console.log(cart)
  return (
    <div className="container mx-auto flex flex-col p-4 ">
      <h1 className="text-3xl font-serif font-semibold">CartList</h1>
      <div className="flex flex-wrap justify-evenly items-center overflow-y-scroll max-h-screen">
        {cart.length > 0 ? (
          cart.map((item, ind) => {
            return (
              <CartItem
                key={ind}
                item={item}
                removeFromCart={() => removeFromCart(item.id)}
              />
            );
          })
        ) : (
          <p className="text-3xl font-semibold ">No Items In Cart</p>
        )}
      </div>
      <Link
        className="text-xl text-center font-serif font-semibold bg-slate-500 text-white px-4 py-2 rounded-lg"
        to="/"
      >
        Close Cart
      </Link>
    </div>
  );
}

CartPage.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,

}
export default CartPage