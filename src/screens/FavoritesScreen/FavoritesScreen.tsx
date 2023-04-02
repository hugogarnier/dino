import React, {FC} from 'react';
import {View} from 'react-native';

import {FlashList} from '@shopify/flash-list';

import {DinosaurCard} from '../../components';
import {ROUTE} from '../../constants';
import {useDinoFav} from '../../hooks/useDino/useDino';
import {Dinosaur, RootStackScreenProps} from '../../types';
import {Layout, Text} from '../../ui';

type FavoritesScreenProps = RootStackScreenProps<ROUTE.HOME_FAVORITES>;
export const FavoritesScreen: FC<FavoritesScreenProps> = () => {
  const {dinoFav} = useDinoFav();

  const renderItem = ({item, index}: {item: Dinosaur; index: number}) => {
    return (
      <DinosaurCard
        dino={item}
        index={index}
        from={'fav'}
      />
    );
  };

  return (
    <Layout>
      <View style={{flex: 1, marginTop: 20}}>
        <Text>list of your favorite dinosaurs</Text>
      </View>
      {(!dinoFav.length && <Text>There is no fav</Text>) || (
        <View style={{height: '100%', width: '100%'}}>
          <FlashList
            renderItem={renderItem}
            data={dinoFav}
            keyExtractor={(item) => String(item.id)}
            estimatedItemSize={144}
            ListEmptyComponent={() => <View style={{flex: 1}} />}
          />
        </View>
      )}
    </Layout>
  );
};
