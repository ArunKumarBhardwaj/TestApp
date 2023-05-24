import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './HomeStyles';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setApiData} from '../../redux/reducers/HomeSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const [page, setPage] = useState(1);
  const [usersList, setUsersList] = useState<any>([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://reqres.in/api/users?page=${page}=1&per_page=5`,
      );
      setUsersList((prevData: any) => [...prevData, ...res?.data?.data]);
      dispatch(setApiData([...usersList, ...res?.data?.data]));
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, [page]);

  const RenderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate('DetailScreen', {
            id: item?.id,
          });
        }}>
        <Image
          style={styles.avatar}
          source={{uri: item?.avatar}}
          resizeMode="contain"
        />
        <Text
          style={
            styles.nameText
          }>{`${item?.first_name} ${item?.last_name}`}</Text>
      </TouchableOpacity>
    );
  };

  const loadMoreItems = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={usersList}
          keyExtractor={(item: any) => item?.id}
          renderItem={({item}) => <RenderItem item={item} />}
          contentContainerStyle={styles.contentStyle}
          ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
        />
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => loadMoreItems()}>
            <Text style={styles.btnText}>Load More Items....</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
