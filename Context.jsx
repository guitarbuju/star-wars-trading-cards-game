/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const AlbumContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components -- Keep the hook next to its provider.
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

// eslint-disable-next-line react-refresh/only-export-components -- Keep the hook next to its provider.
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

