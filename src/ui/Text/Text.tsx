import React, {FC} from 'react';
import {Text as RNText, TextProps} from 'react-native';

import {colors} from '../../theme';

export const Text: FC<TextProps> = ({children, style, ...rest}) => {
  return (
    <RNText
      style={[
        {fontFamily: 'IBMPlexMono-Regular', color: colors.primaryText},
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};
