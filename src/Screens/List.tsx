import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getList} from '../helpers/getList';

const List = () => {
  const [lists, setLists] = useState<ListType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getListData = async () => {
    setIsLoading(true);
    const data = await getList();
    setLists(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getListData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.containerLoading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={lists}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 12,
  },
  text: {
    color: '#000',
  },
});

export default List;
