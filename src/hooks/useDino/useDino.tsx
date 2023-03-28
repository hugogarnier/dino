import dayjs from 'dayjs';

import {useEffect, useState} from 'react';

import {APIS} from '../../constants';
import {useDinoStore} from '../../store';
import {Dinosaur} from '../../types';

export const useDino = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [tmpDinos, setTmpDinos] = useState<Dinosaur[]>([]);

  const dinos = useDinoStore((state) => state.dinos);
  const dinoUpdatedAt = useDinoStore((state) => state.dinoUpdatedAt);
  const fetch = useDinoStore((state) => state.fetch);

  const isDinoDateExpired = dayjs(dinoUpdatedAt).isBefore(
    dayjs().subtract(1, 'month'),
  );

  useEffect(() => {
    (async () => {
      if (isDinoDateExpired || !dinoUpdatedAt) {
        setLoading(true);
        const newDinos = await fetch(APIS.DINOSAURS);
        setTmpDinos(newDinos);
        setLoading(false);
      }
    })();
  }, [fetch, isDinoDateExpired, setTmpDinos, dinoUpdatedAt, dinos]);

  return {loading, dinos, tmpDinos};
};
