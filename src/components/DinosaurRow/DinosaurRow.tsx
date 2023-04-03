import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../../theme';
import {Text} from '../../ui';

type DinosaurRowProps = {
  title: string;
  text: string;
};
export const DinosaurRow: FC<DinosaurRowProps> = ({title, text}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <Text style={StyleSheets.textRow}>{title ? title : 'N/A'}</Text>
      <Text style={StyleSheets.textRow}>{text ? text : 'N/A'}</Text>
    </View>
  );
};

const StyleSheets = StyleSheet.create({
  textRow: {
    fontSize: 14,
    borderColor: colors.primaryText,
    borderWidth: 0.3,
    width: 150,
    paddingVertical: 10,
    textAlign: 'center',
  },
});
