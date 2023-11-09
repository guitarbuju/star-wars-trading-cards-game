import { useAlbumContext } from "../../Context";
import { useMoneyContext } from "../../Context";
import { useState } from "react";
import { cards, GetRandomNumber } from "../../stuff";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import blaster from "../assets/blaster.mp3";
import lsaber from "../assets/lsaber.mp3";
import "./animation.css";

const BoxOffice = () => {
  const [filteredCards, setFilteredCards] = useState([]);
  const [clicked, setClicked] = useState(false);

  const {  setSelectedDeck } = useAlbumContext();
  const { moneyBalance , setMoneyBalance }= useMoneyContext();

  
  const blast = new Audio(blaster);
  const saber = new Audio(lsaber);
  

  const handleRandomNumber = () => {
    const rand = GetRandomNumber();

    const updatedCards = rand
      .map((randValue) => {
        const matchingCard = cards.find((card) => card.id === randValue);
        if (matchingCard) {
          matchingCard.face = true;
          return matchingCard;
        }
        return null;
      })
      .filter(Boolean); // Remove any null values

    setFilteredCards(updatedCards);

    setClicked(true);

    function updateFaceValues(cards, rand) {
      // Create a copy of the original array
      const updatedArray = [...cards];

      // Iterate through the random values
      rand.forEach((randValue) => {
        // Find the matching card in the copy
        const matchingCardIndex = updatedArray.findIndex(
          (card) => card.id === randValue
        );

        // Update the 'face' property if a match is found
        if (matchingCardIndex !== -1) {
          updatedArray[matchingCardIndex] = {
            ...updatedArray[matchingCardIndex],
            face: true,
          };
        }
      });

      setSelectedDeck(updatedArray);
      return updatedArray;
    }

    updateFaceValues(cards, rand);

    const handleSubmit = () => {
      setMoneyBalance((prevBalance) => prevBalance );
      blast.play();
    };

    handleSubmit();
  };
  

  
  
  return (
    <div>
      {clicked ? (
        <div className="flex flex-col">
          <ul className="grid grid-cols-5 gap-5 ">
            {filteredCards.map((card, index) => (
              <li
                key={index}
                className="col-span-1 w-full"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <Card img={card.img} name={card.name} id={card.id} />
              </li>
            ))}
          </ul>
          <div className="flex justify-center align-middle gap-2">
         {
              moneyBalance > 0 &&
              <button
              type="button"
              className={
                "w-52 py-2 font-semibold rounded bg-orange-500 text-gray-900 mt-5 text-xs"
              }
              onClick={() => {
                setMoneyBalance(moneyBalance - 500);
                handleRandomNumber();
                saber.play();
              }}
            >
              Get More Cards
            </button>
            }
            <button
              type="button"
              className="w-52 py-2 font-semibold rounded bg-yellow-400 text-gray-900 mt-5 text-xs"
              onClick={() => {setClicked(false); saber.play()}}
            >
              Home Base
            </button>
          </div>
        </div>
      ) : (
        <MainButton action={handleRandomNumber} />
      )}
    </div>
  );
};

export default BoxOffice;
