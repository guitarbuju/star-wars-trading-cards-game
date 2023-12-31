import { Link } from "react-router-dom";
import logo from "../assets/Star-Wars-Logo-Transparent.png";
import { useAlbumContext } from '../../Context'
import { useMoneyContext } from "../../Context";


const Header = () => {


  const { selectedDeck }= useAlbumContext();
  const { moneyBalance }= useMoneyContext();


  // 
  return (
    <header className="p-4 mb-10">
      <div className="container flex justify-between h-16 mx-auto ">
        <Link to="/">
          <button>
            <img className="w-40 " src={logo} />
          </button>
        </Link> 
        <div>
        <h1 style={{ color: "#10f9f1", fontSize: "40px", opacity: 0.7 }}>
          A long time ago in a galaxy far far away ...
        </h1>
        <h3 className="text-yellow-400">
          Current Balance: {moneyBalance} Republic Dataries
        </h3>

        </div>

        <div className="flex justify-center align-middle gap-2 text-xs">
          {selectedDeck.length >0 &&
       
            <Link to="album">
            <button
              type="button"
              className="w-24 h-8 py-2 font-semibold rounded bg-yellow-400 text-gray-900 "
            >
              Album
            </button>
          </Link>
          
          }
          <Link to='/homebase'>
            <button
              type="button"
              className="w-24 h-8 py-2 font-semibold rounded bg-blue-900 text-gray-200 "
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
