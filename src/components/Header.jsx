import { Link } from "react-router-dom";
import logo from "../assets/Star-Wars-Logo-Transparent.png";
import { useAlbumContext } from '../../Context'
import { useMoneyContext } from "../../Context";


const Header = () => {


  const { selectedDeck }= useAlbumContext();
  const { moneyBalance }= useMoneyContext();


  // 
  return (
    <header className="p-2  xs:mb-10 sm:mb-0 flex justify-center">
      <div className="container xs:w-3/4 sm:flex xs:justify-between h-16  md:w-full">
        <Link to="/">
          <button>
            <img className=" w-40 md:w-28" src={logo} />
          </button>
        </Link> 
        <div>
        <h1 
        className="md:text-2xl "
        style={{ color: "#10f9f1", opacity: 0.7 }}>
          A long time ago in a galaxy far far away ...
        </h1>
        <h2 className="text-yellow-400  ">
          Current Balance: {moneyBalance} Republic Dataries
        </h2>

        </div>

        <div className="flex justify-center align-middle gap-2 text-xs">
          {selectedDeck.length >0 &&
       
            <Link to="album">
            <button
              type="button"
              className="w-24 h-8 py-2 font-semibold rounded bg-yellow-400 text-gray-900 xs:mt-4"
            >
              Album
            </button>
          </Link>
          
          }
          <Link to='/homebase'>
            <button
              type="button"
              className="w-24 h-8 py-2 font-semibold rounded bg-blue-900 text-gray-200 xs:mt-4"
            >
              Home Base
            </button>
          </Link>
          {/* <Link to='exchange'>
            <button
              type="button"
              className="w-24 h-8 py-2 font-semibold rounded bg-blue-900 text-gray-200 "
            >
              Exchange
            </button>
          </Link> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
