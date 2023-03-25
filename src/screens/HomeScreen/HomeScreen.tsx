import {Image, Text, View} from 'react-native';

import {Layout} from '../../ui';
import {useDinoStore} from '../../store';
import {FC, useEffect} from 'react';
import {Dinosaur, RootStackScreenProps} from '../../types';
import {ROUTE} from '../../constants';
import {FlashList} from '@shopify/flash-list';

// RootStackScreenProps<ROUTE.HOME>
type HomeScreenProps = RootStackScreenProps<ROUTE.HOME>;
export const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  const isFocused = navigation.isFocused();
  const dinos = useDinoStore((state) => state.dinos);
  const fetch = useDinoStore((state) => state.fetch);

  useEffect(() => {
    if (isFocused) {
      console.log('fetching');
      fetch('https://www.nhm.ac.uk/api/dino-directory-api/dinosaurs');
      console.log('end of fetch');
    }
  }, [isFocused, fetch]);

  const renderItem = ({item}: {item: Dinosaur}) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 150,
          height: 150,
          backgroundColor: 'grey',
          margin: 10,
        }}>
        <Image
          source={{
            uri: `https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/${item.mediaCollection[0].identifier}.jpg`,
          }}
          style={{width: '100%', height: '100%'}}
          resizeMode={'cover'}
        />
        <Text style={{fontFamily: 'IBMPlexMono-Regular'}}>{item.genus}</Text>
      </View>
    );
  };

  return (
    <Layout>
      <Text>HomeScreen</Text>
      <View style={{height: '100%', width: '100%'}}>
        <FlashList
          renderItem={renderItem}
          data={dinos}
          keyExtractor={(item) => String(item.id)}
          estimatedItemSize={200}
          numColumns={2}
        />
      </View>
    </Layout>
  );
};
