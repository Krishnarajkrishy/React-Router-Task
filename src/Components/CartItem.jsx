import PropTypes from 'prop-types'
import { useState } from 'react';

const CartItem = ({ item, removeFromCart}) => {
  const [count, setCount] = useState(1);
  const totalPrice = (item.price * count).toFixed(2)
  return (
    <div className="flex  flex-col  p-4 gap-4 md:w-2/5 w-full items-center ">
      <img className="w-52 h-52" src={item.image} alt={item.title} />
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <p className="w-2/3">{item.description}</p>
      <p className="text-lg font-bold">Price: ${item.price}</p>
      <div className="flex gap-2 ">
        <p className="text-xl font-semibold">Qty : </p>
        <div className="flex gap-2">
          <button
            onClick={() => setCount(count - 1)}
            className="border-2 border-gray-700 px-1"
            type="button"
          >
            {" "}
            -{" "}
          </button>
          <span>{count}</span>
          <button
            onClick={() => setCount(count + 1)}
            className="border-2 border-gray-700 px-1"
            type="button"
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
      <p className="text-xl font-bold">Total Price: ${totalPrice}</p>
      <p className="text-2xl text-green-500 font-bold ">
        Discount 10% : $ {(totalPrice * 0.9).toFixed(2)}
      </p>
      <button
        onClick={removeFromCart}
        className="bg-blue-500  text-white px-4 py-2 rounded active:bg-blue-800"
        type="button"
      >
        Remove From Cart
      </button>
    </div>
  );
};

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    
}

export default CartItem