import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {FC} from 'react';
import styles from './DetailStyles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

interface props {
  route: any;
}

const DetailScreen: FC<props> = ({route}) => {
  const navigation = useNavigation<any>();
  const {data} = useSelector((state: any) => state?.home);
  const detailItem = data?.find((item: any) => item?.id === route?.params?.id);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.avatar}
          source={{uri: detailItem?.avatar}}
          resizeMode="contain"
        />
        <View style={styles.cardContent}>
          <Text
            style={
              styles.name
            }>{`${detailItem?.first_name} ${detailItem?.last_name}`}</Text>
          <Text style={styles.email}>{detailItem?.email}</Text>
          <Text style={styles.id}>{`ID: ${detailItem?.id}`}</Text>
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;
