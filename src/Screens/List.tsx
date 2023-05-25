import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const List = () => {
  const [lists, setLists] = useState<ListType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getList = async () => {
    setIsLoading(true);
    const url = 'https://6172cfe5110a740017222e2b.mockapi.io/elements';
    const response = await fetch(url);
    const data = await response.json();
    setLists(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getList();
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
