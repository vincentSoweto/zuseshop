import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  TouchableOpacity,
} from 'react-native';
import {getData} from '../utilities/utilities';
import {FlatList} from 'react-native';
import Card from './components/Card';

function HomeView({navigation}) {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setLoading(true);
    await getData()
      .then(data => {
        setDataList(data);
      })
      .catch(err => {
        console.error('Error getting data:', err);
      });
    setLoading(false);
  }, []);

  const handleCardPress = item => {
    // Pass the item or its ID to the details view and navigate to it
    navigation.navigate('Details', {item});
  };

  const renderCards = ({item}) => {
    const {image_link, name, price, description} = item;
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => handleCardPress(item)}>
        <View style={styles.card}>
          <Card url={image_link} name={name} price={price} />
        </View>
      </TouchableOpacity>
    );
  };

  return loading ? (
    <View
      style={[
        styles.container,
        {
          justifyContent: 'center',
        },
        styles.horizontal,
      ]}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={dataList}
        renderItem={renderCards}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default HomeView;
