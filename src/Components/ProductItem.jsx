import PropTypes from 'prop-types'

const ProductItem = ({ image, title, description, price, addToCart }) => {
    return (
        <div className="flex  flex-col md:w-2/5 w-full p-4 gap-4 items-center">
            <img className="w-52 h-52" src={image} alt={title} />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p>{description}</p>
            <p className="text-lg font-bold">Price: ${price}</p>
            <button
                onClick={addToCart}
                className="bg-blue-500  text-white px-4 py-2 rounded active:bg-blue-800"
                type="button"
            >
                Add To Cart
            </button>
        </div>
    );
};

ProductItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired
}

export default ProductItem