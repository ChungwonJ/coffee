import '@/styles/globals.scss'
import { Provider } from 'react-redux';
import store from '@/redux/Store';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>)
}
