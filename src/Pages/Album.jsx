/* eslint-disable react/prop-types */

import Card2 from "../components/Card2";
import { useAlbumContext } from '../../Context'


const Album = () => {
 
const { selectedDeck }= useAlbumContext()

  return (
    <div>

      <ul className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-40 sm:mt-0">
        {selectedDeck.map((card, index) => (
          <li className="col-span-1 w-full" key={index}  style={{ animationDelay: `${index * 0.1}s` }}>
            <Card2 img={card.img} name={card.name} id={card.id} face={card.face}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Album;
