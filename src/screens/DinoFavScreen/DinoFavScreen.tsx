import {FC} from 'react';
import {View} from 'react-native';

import Animated from 'react-native-reanimated';

import {DinosaurGrid, DinosaurName} from '../../components';
import {ROUTE} from '../../constants';
import {RootStackScreenProps} from '../../types';
import {Layout} from '../../ui';
import {sharedElementTransition} from '../../utils';

type DinoFavScreenProps = RootStackScreenProps<ROUTE.DINOSAUR_FAV>;
export const DinoFavScreen: FC<DinoFavScreenProps> = ({route}) => {
  const dino = route.params.dino;
  return (
    <Layout noPadding>
      <Animated.Image
        defaultSource={require('../../assets/images/dino-shape.png')}
        source={{
          uri: dino.uri,
        }}
        style={{
          width: '100%',
          height: 300,
          backgroundColor: 'white',
        }}
        resizeMode={'contain'}
        sharedTransitionTag="dinoFavTag"
        sharedTransitionStyle={sharedElementTransition}
      />

      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 30,
        }}>
        <DinosaurName dino={dino} />
        <DinosaurGrid dino={dino} />
      </View>
    </Layout>
  );
};
