import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Card({elem, index}) {
  return (
    <View key={`ImageKey:${index}`} style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: elem?.webformatURL,
        }}
      />
      <View style={styles.row}>
        <View style={styles.userContainer}>
          <Image
            style={styles.userAvatar}
            source={{
              uri: elem?.userImageURL,
            }}
          />
          <Text style={styles.username}>{elem?.user || 'Anonymous'}</Text>
        </View>
        <Text style={styles.viewsCount}>
          <Text style={{color: '#f56040'}}>{elem?.views || 0}</Text> views
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 30,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 3,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 14,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#f56040',
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  username: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 6,
    fontSize: 16,
  },
  viewsCount: {
    color: '#000',
    marginLeft: 6,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Card;
