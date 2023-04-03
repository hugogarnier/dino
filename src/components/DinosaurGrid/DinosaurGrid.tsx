import React, {FC} from 'react';
import {View} from 'react-native';

import {Dinosaur} from '../../types';
import {DinosaurRow} from '../DinosaurRow';

type DinosaurGridProps = {
  dino: Dinosaur;
};
export const DinosaurGrid: FC<DinosaurGridProps> = ({dino}) => {
  return (
    <View style={{gap: 10}}>
      <DinosaurRow
        title="continent"
        text={dino.countries[0].continent.continent}
      />
      <DinosaurRow
        title="country"
        text={dino.countries[0].country}
      />
      <DinosaurRow
        title="period"
        text={dino.period.period}
      />
      <DinosaurRow
        title="species"
        text={dino.species}
      />
      <DinosaurRow
        title="body shape"
        text={dino.bodyShape.bodyShape}
      />
    </View>
  );
};
