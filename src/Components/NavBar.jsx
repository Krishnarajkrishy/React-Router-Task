import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


const NavBar = ({ count }) => {
  return (
    <nav
      className="container mx-auto md:flex md:flex-row flex flex-col md:h-20 h-28 p-4 justify-around border-b-2 shadow-lg items-center">
      <h1 className="text-3xl font-serif font-bold">Fack Store</h1>
      <Link
        className="md:text-xl text-lg font-serif font-semibold bg-slate-500 text-white px-4 py-2 rounded-lg"
        to="/cart"
      >
        cart : {count}
      </Link>
    </nav>
  );
};
 
NavBar.propTypes = {
  count:PropTypes.number.isRequired
}


export default NavBar