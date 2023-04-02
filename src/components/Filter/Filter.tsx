import React, {FC} from 'react';
import {View} from 'react-native';

import {TextInput} from '../../ui';

type FilterProps = {
  search: string;
  setSearch: (text: string) => void;
};
export const Filter: FC<FilterProps> = ({search, setSearch}) => {
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
        onChangeText={(text) => setSearch(text)}
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
