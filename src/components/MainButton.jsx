/* eslint-disable react/prop-types */

import { useEffect, useState, useRef } from "react";
import { useMoneyContext } from "../../Context";
import { cards } from "../../stuff";
import blaster from "../assets/blaster.mp3";
import lsaber from "../assets/lsaber.mp3";
import ReactPlayer from "react-player";

const MainButton = ({ action }) => {

   const video = "https://res.cloudinary.com/dfbflavif/video/upload/v1699561919/ouemox3yo9ouquvagc9m.mp4";
  
  const reactPlayerRef = useRef(null); 
  // const handleVideoReady = () => {
  //   // Once the video is ready, autoplay it
  //   reactPlayerRef.current.play();
  // };

  

  const { moneyBalance, setMoneyBalance } = useMoneyContext();

  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    const inputValue = parseFloat(e.target.value);
   
    if (!isNaN(inputValue) && inputValue >= 0) {
      setInputValue(inputValue); 
     
    } else{ alert('Nooope, Invalid input')}
  };

  const handleSubmit = () => {
    setMoneyBalance((prevBalance) => prevBalance + inputValue);
    blast.play();
  };
  useEffect(() => {
    console.log(moneyBalance); // This will log the updated value of moneyBalance
  }, [moneyBalance]); // Add moneyBalance as a dependency

  const blast = new Audio(blaster);
  const saber = new Audio(lsaber);

  return (
    <section className="p-6 flex justify-center w-full">
      <div className="opacity-80">
      <ReactPlayer
          ref={reactPlayerRef} // Assign the ref to the ReactPlayer
          width='100%'
          height='auto'
          url={video}
          controls={false}
          loop={true}
          muted={true}
          playing={true} // Set "playing" prop to true to enable autoplay
          // onReady={handleVideoReady} // Add this callback
          // style={{border:'2px solid white',borderRadius:'25px'}}
        />
       
      </div>

      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5 absolute">
        <div
          id="cont"
          className=" ml-80 px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 absolute -mt-10 z-50"
        >
          <span className="block mb-2 text-gray-200">
            Welcome to Star Wars trading Cards game
          </span>
          <h1 className="text-5xl font-extrabold text-yellow-400">
            Get your Cards Here
          </h1>
          <p className="my-8">
            <span className="font-medium  text-gray-200">
              We have <span>{cards.length} </span>collectible cards
            </span>
            <span className="text-yellow-400 ml-2">Collect&apos;em all...</span>
          </p>
          <p className="font-medium text-sm text-gray-200">
            Your current Balance is:
            <span className="text-yellow-400 ml-4 text-lg shadow-lg">
              {moneyBalance} Republic Dataries
            </span>
          </p>

          <form className="flex justify-center align-middle gap-4">
          
              <div className="flex flex-col gap-4">
                <fieldset className="w-20 space-y-1 text-gray-100">
                  <label
                    id="insert"
                    htmlFor="price"
                    className="block text-sm font-medium"
                  >
                    Insert Tokens
                  </label>
                  <div className="flex">
                    <input
                      type="number"
                      step='500'
                      name="price"
                      id="price"
                      placeholder="0,00"
                      className="flex flex-1 text-right border sm:text-sm rounded-l-md focus:ri border-gray-100 text-gray-800 bg-gray-200 focus:ri h-10"
                      onChange={handleInput}
                    />
                    <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md dark:bg-gray-700 border w-12">
                      €
                    </span>
                  </div>
                </fieldset>

                <div className="flex justify-center align-middle gap-2 text-xs">
                  <button
                    type="button"
                    className="w-24 py-2 font-semibold rounded bg-yellow-400 text-gray-900 "
                    onClick={handleSubmit}
                  >
                    Pay!
                  </button>
                  <button
                    type="reset"
                    className="w-24 py-2 font-semibold rounded bg-green-600 text-gray-900 "
                    onClick={() => {
                      setInputValue(0);
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
           
          </form>
          {moneyBalance > 500 && (
            <button
              type="button"
              className={
                "w-52 h-10 mt-12 py-2 font-semibold rounded bg-orange-500 text-gray-900 "
              }
              onClick={() => {
                setMoneyBalance(moneyBalance - 500);
                action();
                saber.play();
              }}
            >
              Get the Cards
            </button>
          )}
        </div>
        {/* <img
          id="mainImg"
          src={poster}
          alt=""
          className="object-cover w-4/4 rounded-md xl:col-span-3 dark:bg-gray-500 opacity-20 -mt-10 ml-72 mr-4"
        /> */}
      </div>
    </section>
  );
};

export default MainButton;
