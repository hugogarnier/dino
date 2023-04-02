import {useDinoFavStore, useDinoStore} from '../../store';

export const useDino = () => {
  const addDinos = useDinoStore((state) => state.addDinos);
  const filteredDinos = useDinoStore((state) => state.filteredDinos);
  const filterDinos = useDinoStore((state) => state.filterDinos);
  const search = useDinoStore((state) => state.search);

  return {addDinos, filteredDinos, filterDinos, search};
};
export const useDinoFav = () => {
  const dinoFav = useDinoFavStore((state) => state.dinoFav);
  const addFav = useDinoFavStore((state) => state.addFav);
  const removeFav = useDinoFavStore((state) => state.removeFav);

  return {dinoFav, addFav, removeFav};
};
