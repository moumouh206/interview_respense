import '@/styles/globals.css';
import { Provider } from 'react-redux';
import store from 'redux/store';

/* eslint-disable react/jsx-props-no-spreading */
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
