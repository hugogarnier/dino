import dayjs from 'dayjs';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

import {Dinosaur} from '../types';

interface DinoState {
  dinos: Dinosaur[];
  addDinos: (dinos: Dinosaur[]) => void;
  dinoUpdatedAt: string;
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
      addDinos: (dinos) => {
        set(() => ({
          dinos: dinos,
          dinoUpdatedAt: dayjs().toISOString(),
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
