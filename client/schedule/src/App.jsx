import './App.css';
import { ListContact } from './components/ListContact';
import { Title } from './components/Title';

import {
  Store
} from './context/contacts_context'

function App() {

  return (

    <Store>
      <div className="App">
        <Title />
        <ListContact />
      </div>
    </Store>


  );
}

export default App;
