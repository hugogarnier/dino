import {FC} from 'react';
import {View} from 'react-native';

import {searchFilter} from '../../functions';
import {Dinosaur} from '../../types';
import {TextInput} from '../../ui';

type FilterProps = {
  search: string;
  setSearch: (text: string) => void;
  dinos: Dinosaur[];
  setFilteredDinos: (dinos: Dinosaur[]) => void;
};
export const Filter: FC<FilterProps> = ({
  search,
  setSearch,
  dinos,
  setFilteredDinos,
}) => {
  return (
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
      {/*<Pressable*/}
      {/*  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>*/}
      {/*  {({pressed}) => (*/}
      {/*    <Tune color={pressed ? colors.secondaryText : colors.primaryText} />*/}
      {/*  )}*/}
      {/*</Pressable>*/}
    </View>
  );
};
