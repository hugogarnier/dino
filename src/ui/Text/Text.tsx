import React, {FC} from 'react';
import {Text as RNText, TextProps} from 'react-native';

export const Text: FC<TextProps> = ({children, style, ...rest}) => {
  return (
    <RNText
      style={[{fontFamily: 'IBMPlexMono-Regular'}, style]}
      {...rest}>
      {children}
    </RNText>
  );
};
