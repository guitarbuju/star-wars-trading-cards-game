/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const AlbumContext = createContext();

export const useAlbumContext=()=> {
  return useContext(AlbumContext);
}

export const AlbumProvider=({ children })=> {
  const [selectedDeck, setSelectedDeck] = useState([]);

  return (
    <AlbumContext.Provider value={{ selectedDeck, setSelectedDeck}}>
      {children}
    </AlbumContext.Provider>
  );
}


const MoneyContext = createContext();

export const useMoneyContext = () => {
  return useContext(MoneyContext);
}

export const MoneyProvider = ({ children }) => {
  const [moneyBalance, setMoneyBalance] = useState(0);

  return (
    <MoneyContext.Provider value={{ moneyBalance, setMoneyBalance }}>
      {children}
    </MoneyContext.Provider>
  );
}

