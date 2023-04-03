import React, {FC} from 'react';
import {Image, Pressable, View} from 'react-native';

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
      style={[
        {
          aspectRatio: 1,
          flexGrow: 1,
          width: '50%',
          position: 'relative',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: colors.secondary,
          borderColor: colors.primaryText,
          borderWidth: 0.3,
          marginVertical: 10,
        },
        index % 2 === 0
          ? {
              marginRight: 10,
            }
          : {
              marginLeft: 10,
            },
      ]}>
      {({pressed}) => (
        <View
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Image
            defaultSource={require('../../assets/images/dino-shape.png')}
            source={{
              uri: dino.uri,
            }}
            style={{
              width: '100%',
              height: 130,
              transform: [{scale: pressed ? 0.9 : 1}],
            }}
            resizeMode={'contain'}
          />
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
