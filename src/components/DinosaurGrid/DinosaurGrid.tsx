import React, {FC} from 'react';
import {View} from 'react-native';

import {Dino} from '../../types';
import {DinosaurRow} from '../DinosaurRow';

type DinosaurGridProps = {
  dino: Dino;
};
export const DinosaurGrid: FC<DinosaurGridProps> = ({dino}) => {
  return (
    <View style={{gap: 10}}>
      <DinosaurRow
        title="continent"
        text={dino.continent}
      />
      <DinosaurRow
        title="country"
        text={dino.country}
      />
      <DinosaurRow
        title="period"
        text={dino.period}
      />
      <DinosaurRow
        title="species"
        text={dino.species}
      />
      <DinosaurRow
        title="body shape"
        text={dino.bodyShape}
      />
    </View>
  );
};
