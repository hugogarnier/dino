import {FC} from 'react';
import {Image, View} from 'react-native';

import {DinosaurGrid, DinosaurName} from '../../components';
import {ROUTE} from '../../constants';
import {RootStackScreenProps} from '../../types';
import {Layout} from '../../ui';

type DinoFavScreenProps = RootStackScreenProps<ROUTE.DINOSAUR_FAV>;
export const DinoFavScreen: FC<DinoFavScreenProps> = ({route}) => {
  const dino = route.params.dino;
  return (
    <Layout noPadding>
      <Image
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
