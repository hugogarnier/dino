import dayjs from 'dayjs';

import {FC, useEffect, useState} from 'react';
import {View} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';

import {DinosaurCard} from '../../components';
import {APIS, ROUTE} from '../../constants';
import {useDinoStore} from '../../store';
import {Dinosaur, RootStackScreenProps} from '../../types';
import {Layout, Text} from '../../ui';

type HomeScreenProps = RootStackScreenProps<ROUTE.HOME_DINO>;
export const HomeScreen: FC<HomeScreenProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const isFocused = useIsFocused();
  const dinos = useDinoStore((state) => state.dinos);
  const dinoUpdatedAt = useDinoStore((state) => state.dinoUpdatedAt);
  const fetch = useDinoStore((state) => state.fetch);

  const isDinoDateExpired = dayjs(dinoUpdatedAt).isBefore(
    dayjs().subtract(1, 'month'),
  );

  useEffect(() => {
    (async () => {
      if (isFocused && (isDinoDateExpired || !dinoUpdatedAt)) {
        setLoading(true);
        await fetch(APIS.DINOSAURS);
        setLoading(false);
      }
    })();
  }, [isFocused, fetch, isDinoDateExpired, dinoUpdatedAt]);

  const renderItem = ({item}: {item: Dinosaur}) => {
    return <DinosaurCard dino={item} />;
  };

  return (
    <Layout>
      <Text>HomeScreen</Text>
      <View style={{height: '100%', width: '100%'}}>
        <FlashList
          renderItem={renderItem}
          data={dinos}
          keyExtractor={(item) => String(item.id)}
          estimatedItemSize={200}
          refreshing={loading}
          onRefresh={() => <Text>Refresh</Text>}
        />
      </View>
    </Layout>
  );
};
