import dayjs from 'dayjs';

import {useEffect} from 'react';

import {useQuery} from '@tanstack/react-query';

import {APIS} from '../../constants';
import {useDinoStore} from '../../store';
import {useDinoFavStore} from '../../store/store';
import {Dinosaur} from '../../types';

export const useDino = () => {
  const dinos = useDinoStore((state) => state.dinos);
  const dinoUpdatedAt = useDinoStore((state) => state.dinoUpdatedAt);
  const addDinos = useDinoStore((state) => state.addDinos);

  const {isLoading, error, data, isFetching, refetch} = useQuery({
    queryKey: ['dinos'],
    queryFn: async () => {
      const response = await fetch(APIS.DINOSAURS);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const tmpDinos = await response.json();
      return tmpDinos.map((dino: Dinosaur) => {
        return {
          ...dino,
          uri: `${APIS.DINO_IMAGE}${dino.mediaCollection[0].identifier}.jpg`,
        };
      });
    },
    enabled: false,
  });

  const isDinoDateExpired = dayjs(dinoUpdatedAt).isBefore(
    dayjs().subtract(1, 'month'),
  );

  useEffect(() => {
    (async () => {
      if (isDinoDateExpired || !dinoUpdatedAt) {
        refetch();
        addDinos(data);
      }
    })();
  }, [data, isDinoDateExpired, addDinos, dinoUpdatedAt, refetch]);

  return {
    isLoading,
    error,
    data,
    isFetching,
    dinos,
    refetch,
    isDinoDateExpired,
    dinoUpdatedAt,
  };
};

export const useDinoFav = () => {
  const dinoFav = useDinoFavStore((state) => state.dinoFav);
  const addFav = useDinoFavStore((state) => state.addFav);
  const removeFav = useDinoFavStore((state) => state.removeFav);

  return {dinoFav, addFav, removeFav};
};
