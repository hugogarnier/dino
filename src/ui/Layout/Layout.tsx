import {FC, ReactNode} from 'react';
import {ScrollView} from 'react-native';

import {colors} from '../../theme';

type LayoutProps = {
  children: ReactNode;
};
export const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 10,
        backgroundColor: colors.background,
      }}
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
      {children}
    </ScrollView>
  );
};
