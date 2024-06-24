import { Provider } from 'react-redux';
import { store } from './store';
import Converter from './components/Converter/Converter.jsx';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Converter />
      </Provider>,
    </div>
  );
}

export default App;
