import dayjs from 'dayjs';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

import {APIS} from '../constants';
import {Dinosaur} from '../types';

interface DinoState {
  dinos: Dinosaur[];
  filteredDinos: Dinosaur[];
  search: string;
  dinoUpdatedAt: string;
  addDinos: () => void;
  filterDinos: (arg: string) => void;
  resetSearch: () => void;
}

interface DinoFavState {
  dinoFav: Dinosaur[];
  addFav: (dinoToAdd: Dinosaur) => void;
  removeFav: (dinoToRemove: Dinosaur) => void;
}

export const useDinoStore = create<DinoState>()(
  persist(
    (set) => ({
      dinos: [],
      filteredDinos: [],
      search: '',
      dinoUpdatedAt: '',
      addDinos: async () => {
        const response = await fetch(APIS.DINOSAURS);
        const responseJson = await response.json();
        const tmpDinos = await responseJson.map((dino: Dinosaur) => {
          return {
            id: dino.id,
            genus: dino.genus,
            uri: `${APIS.DINO_IMAGE}${dino.mediaCollection[0].identifier}.jpg`,
            continent: dino.countries[0].continent?.continent || 'unknown',
            country: dino.countries[0]?.country || 'unknown',
            period: dino.period?.period || 'unknown',
            species: dino.species || 'unknown',
            bodyShape: dino.bodyShape?.bodyShape || 'unknown',
          };
        });
        set(() => ({
          dinos: tmpDinos,
          filteredDinos: tmpDinos,
          dinoUpdatedAt: dayjs().toISOString(),
        }));
      },
      filterDinos: (searchText: string) => {
        set(({dinos}) => ({
          filteredDinos: dinos.filter((dino) =>
            dino.genus.toLowerCase().includes(searchText.toLowerCase()),
          ),
          search: searchText,
        }));
      },
      resetSearch: () => {
        set(({dinos}) => ({
          filteredDinos: dinos,
          search: '',
        }));
      },
    }),
    {
      name: 'dino-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        dinos: state.dinos,
        dinoUpdatedAt: state.dinoUpdatedAt,
      }),
    },
  ),
);

export const useDinoFavStore = create<DinoFavState>()(
  persist(
    (set) => ({
      dinoFav: [],
      addFav: (dinoToAdd) => {
        set((state) => ({
          dinoFav: [...state.dinoFav, dinoToAdd],
        }));
      },
      removeFav: (dinoToRemove) => {
        set((state) => ({
          dinoFav: state.dinoFav.filter((dino) => dino.id !== dinoToRemove.id),
        }));
      },
    }),
    {
      name: 'dino-fav-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        dinoFav: state.dinoFav,
      }),
    },
  ),
);
