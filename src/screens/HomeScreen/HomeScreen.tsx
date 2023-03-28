import {FC, useEffect, useState} from 'react';
import {Pressable, View} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';

import {DinosaurCard, Tune} from '../../components';
import {ROUTE} from '../../constants';
import {searchFilter} from '../../functions';
import {useDino} from '../../hooks';
import {colors} from '../../theme';
import {Dinosaur, RootStackScreenProps} from '../../types';
import {Layout, TextInput} from '../../ui';

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
      />
    );
  };

  return (
    <Layout>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginHorizontal: 21,
          paddingVertical: 20,
          marginTop: 80,
        }}>
        <TextInput
          value={search}
          onChangeText={(text) =>
            searchFilter({
              text,
              data: dinos,
              setFilteredData: setFilteredDinos,
              setSearch,
            })
          }
        />
        <Pressable
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {({pressed}) => (
            <Tune color={pressed ? colors.secondaryText : colors.primaryText} />
          )}
        </Pressable>
      </View>
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
