import {FC} from 'react';
import {Image, Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {ROUTE} from '../../constants';
import {colors} from '../../theme';
import {Dinosaur} from '../../types';
import {Text} from '../../ui';

type DinosaurCardProps = {dino: Dinosaur};

export const DinosaurCard: FC<DinosaurCardProps> = ({dino}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(ROUTE.DINOSAUR)}
      style={{
        height: 160,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderColor: colors.primaryText,
        borderWidth: 0.3,
        paddingHorizontal: 10,
        marginVertical: 10,
      }}>
      {({pressed}) => (
        <>
          <Image
            defaultSource={require('../../assets/images/dino.png')}
            source={{
              uri: dino.uri,
            }}
            style={{
              width: 130,
              height: 150,
              transform: [{scale: pressed ? 0.9 : 1}],
            }}
            resizeMode={'contain'}
          />
          <Text
            style={{
              fontSize: 18,
              paddingVertical: 10,
              transform: [{scale: pressed ? 0.9 : 1}],
            }}>
            {dino.genus}
          </Text>
        </>
      )}
    </Pressable>
  );
};
