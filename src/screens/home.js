import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
// Components
import Header from '../components/header';
import Card from '../components/card';

// Vars
import {BASE_URL, API_KEY} from '../config';

// Actions
import {set_data} from '../redux/action';

function Home() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    fetchData();
  }, [pageNo]);
  const fetchData = () => {
    fetch(`${BASE_URL}/?key=${API_KEY}&image_type=photo&page=${pageNo}`)
      .then(res => {
        return res.json();
      })
      .then(dataInResponse => {
        if (data && data?.length > 1) {
          dispatch(set_data([...data, ...dataInResponse?.hits]));
        } else {
          dispatch(set_data(dataInResponse?.hits));
        }
      });
  };
  return (
    <View>
      <Header />
      <View style={styles.contentBox}>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return <Card elem={item} index={index} />;
          }}
          keyExtractor={item => item.id}
          onEndReached={() => setPageNo(pageNo + 1)}
          onEndThreshold={0.5}
        />
        {!data && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#fcaf45" />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentBox: {
    padding: 20,
  },
  loading: {
    marginTop: 150,
  },
});

export default Home;
