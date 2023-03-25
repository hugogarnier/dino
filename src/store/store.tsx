import {create} from 'zustand';
import {Dinosaur} from '../types';

interface DinoState {
  dinos: Dinosaur[];
  fetch: (arg: string) => Promise<void>;
}

export const useDinoStore = create<DinoState>()((set) => ({
  dinos: [],
  fetch: async (pond: string) => {
    const response = await fetch(pond);
    set({dinos: await response.json()});
  },
}));
