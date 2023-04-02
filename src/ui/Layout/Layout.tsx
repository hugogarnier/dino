import React, {FC, ReactNode} from 'react';
import {ScrollView} from 'react-native';

import {colors} from '../../theme';

type LayoutProps = {
  noPadding?: boolean;
  children: ReactNode | ReactNode[];
};
export const Layout: FC<LayoutProps> = ({noPadding = false, children}) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        marginHorizontal: noPadding ? 0 : 20,
        paddingTop: noPadding ? 0 : 10,
        backgroundColor: colors.background,
      }}
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
      {children}
    </ScrollView>
  );
};
