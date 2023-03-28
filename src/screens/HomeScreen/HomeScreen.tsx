import {FC, useEffect, useState} from 'react';
import {View} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';

import {DinosaurCard, Filter} from '../../components';
import {ROUTE} from '../../constants';
import {useDino} from '../../hooks';
import {Dinosaur, RootStackScreenProps} from '../../types';
import {Layout} from '../../ui';

type HomeScreenProps = RootStackScreenProps<ROUTE.HOME_DINO>;
export const HomeScreen: FC<HomeScreenProps> = () => {
  const [search, setSearch] = useState('');
  const [filteredDinos, setFilteredDinos] = useState<Dinosaur[]>([]);

  const {dinos, loading, tmpDinos} = useDino();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setFilteredDinos(tmpDinos);
    }
  }, [isFocused, tmpDinos]);

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
      <Filter
        search={search}
        setSearch={setSearch}
        dinos={dinos}
        setFilteredDinos={setFilteredDinos}
      />
      <View style={{height: '100%', width: '100%'}}>
        <FlashList
          renderItem={renderItem}
          data={filteredDinos}
          keyExtractor={(item) => String(item.id)}
          estimatedItemSize={200}
          refreshing={loading}
          numColumns={2}
        />
      </View>
    </Layout>
  );
};
