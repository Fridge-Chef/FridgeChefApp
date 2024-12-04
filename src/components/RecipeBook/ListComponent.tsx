import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import ArrowSubTitle from '../elements/SubTitle/ArrowSubTitle';

type ListComponentProps = {
  name: string;
  data: any;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  renderItem: ListRenderItem<any>;
  onPress: () => void;
};

const ListComponent = ({
  name,
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  renderItem,
  onPress,
}: ListComponentProps) => {
  const handleFetchNextPage = () => {
    console.log('마지막');
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ArrowSubTitle onPress={onPress} name={name} />
      </View>
      <View style={{marginTop: FWidth * 12}}>
        <FlatList
          data={data}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: FWidth * 60}}
          overScrollMode="never"
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          ListFooterComponent={
            isFetchingNextPage ? (
              <ActivityIndicator size="large" color={colors.primary[1]} />
            ) : null
          }
          onEndReached={handleFetchNextPage}
        />
      </View>
    </View>
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: FWidth * 24,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
