import './App.sass';
import MeliAppRouter from './router/MeliAppRouter';
import { Provider } from 'react-redux';
import { store } from './App/store';

function App() {
  return (
    <Provider store={store}>
      <MeliAppRouter />
    </Provider>
  );
}

export default App;
