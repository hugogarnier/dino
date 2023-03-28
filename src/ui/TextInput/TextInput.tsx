import {FC} from 'react';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';

import {colors} from '../../theme';

export const TextInput: FC<TextInputProps> = ({
  value,
  onChangeText,
  ...props
}) => {
  return (
    <RNTextInput
      style={{
        paddingHorizontal: 20,
        width: '100%',
        height: 40,
        borderWidth: 0.3,
        borderColor: colors.primaryText,
        fontFamily: 'IBMPlexMono-Regular',
        fontSize: 14,
      }}
      onChangeText={onChangeText}
      value={value}
      underlineColorAndroid="transparent"
      placeholder="search a dinosaur"
      autoCapitalize={'none'}
      {...props}
    />
  );
};
