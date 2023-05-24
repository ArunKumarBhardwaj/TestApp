import React from 'react';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigation/RootNavigation';

export default React.memo(()=>{
  return(
  <Provider store={store}>
    <RootNavigation />
  </Provider>
  )
});
