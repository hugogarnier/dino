import {FC} from 'react';
import {Pressable, View} from 'react-native';

import {useDinoFav} from '../../hooks/useDino/useDino';
import {colors} from '../../theme';
import {Dinosaur} from '../../types';
import {Text} from '../../ui';
import {Heart} from '../Heart';

type DinosaurNameProps = {
  dino: Dinosaur;
};
export const DinosaurName: FC<DinosaurNameProps> = ({dino}) => {
  const {dinoFav, removeFav, addFav} = useDinoFav();

  const handleFav = () => {
    if (dinoFav.includes(dino)) {
      removeFav(dino);
    } else {
      addFav(dino);
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
      }}>
      <Text style={{fontSize: 24, marginRight: 10}}>{dino.genus}</Text>
      <Pressable onPress={handleFav}>
        <Heart
          color={dinoFav.includes(dino) ? colors.primary : colors.secondary}
        />
      </Pressable>
    </View>
  );
};
