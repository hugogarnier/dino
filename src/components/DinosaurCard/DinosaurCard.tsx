import React, {FC} from 'react';
import {Pressable, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {ROUTE} from '../../constants';
import {colors} from '../../theme';
import {Dinosaur} from '../../types';
import {Text} from '../../ui';

type DinosaurCardProps = {dino: Dinosaur; index: number; from: string};

export const DinosaurCard: FC<DinosaurCardProps> = ({dino, index, from}) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    //TODO: change this when ready and use animated
    // if (from === 'fav') {
    //   return navigation.navigate(ROUTE.DINOSAUR_FAV, {dino});
    // }
    return navigation.navigate(ROUTE.DINOSAUR, {dino});
  };

  return (
    <Pressable
      onPress={handleNavigation}
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderColor: colors.primaryText,
        borderWidth: 0.3,
        marginVertical: 10,
      }}>
      {({pressed}) => (
        <View
          style={{
            flex: 1,
            marginVertical: 15,
          }}>
          <Text
            style={{
              fontSize: 14,
              transform: [{scale: pressed ? 0.9 : 1}],
            }}>
            {dino.genus}
          </Text>
        </View>
      )}
    </Pressable>
  );
};
