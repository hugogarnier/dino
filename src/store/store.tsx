import dayjs from 'dayjs';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

import {APIS} from '../constants';
import {Dinosaur} from '../types';

interface DinoState {
  dinos: Dinosaur[];
  dinoUpdatedAt: string;
  fetch: (arg: string) => Promise<Dinosaur[]>;
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
      dinoUpdatedAt: '',
      fetch: async (pond: string) => {
        const response = await fetch(pond);
        const tmpDinos = await response.json();
        const newDinos = tmpDinos.map((dino: Dinosaur) => {
          return {
            ...dino,
            uri: `${APIS.DINO_IMAGE}${dino.mediaCollection[0].identifier}.jpg`,
          };
        });
        set({
          dinos: newDinos,
          dinoUpdatedAt: dayjs().toISOString(),
        });
        return newDinos;
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
