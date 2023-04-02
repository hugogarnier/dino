import React, {FC} from 'react';
import {View} from 'react-native';

import {FlashList} from '@shopify/flash-list';

import {DinosaurCard, Filter} from '../../components';
import {ROUTE} from '../../constants';
import {useDino} from '../../hooks';
import {Dinosaur, RootStackScreenProps} from '../../types';
import {Layout} from '../../ui';

type HomeScreenProps = RootStackScreenProps<ROUTE.HOME_DINO>;
export const HomeScreen: FC<HomeScreenProps> = () => {
  const {filteredDinos, filterDinos, search} = useDino();

  const renderItem = ({item, index}: {item: Dinosaur; index: number}) => {
    return (
      <DinosaurCard
        dino={item}
        index={index}
        from={'home'}
      />
    );
  };

  return (
    <Layout>
      {
        <>
          <Filter
            search={search}
            setSearch={filterDinos}
          />
          <View style={{height: '100%', width: '100%'}}>
            <FlashList
              renderItem={renderItem}
              data={filteredDinos}
              keyExtractor={(item) => String(item.id)}
              estimatedItemSize={199}
              numColumns={2}
            />
          </View>
        </>
      }
    </Layout>
  );
};
