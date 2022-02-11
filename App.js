import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// Redux
import {store, persistor} from './src/redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// Importing Screens
import Home from './src/screens/home';
console.disableYellowBox = true;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* Home Screen */}
          <Home />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
