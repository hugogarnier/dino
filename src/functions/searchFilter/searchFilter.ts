import {Dinosaur} from '../../types';

export type SearchFilter = {
  text: string;
  data: Dinosaur[];
  setFilteredData: (arg: Dinosaur[]) => void;
  setSearch: (arg: string) => void;
};
export const searchFilter = ({
  text,
  data,
  setFilteredData,
  setSearch,
}: SearchFilter) => {
  if (text) {
    const filteredData = data.filter((dino) =>
      dino.genus.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(filteredData);
    return setSearch(text);
  }

  setFilteredData(data);
  return setSearch(text);
};
