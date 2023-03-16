import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import { LaunchList } from './Components/LaunchList';
import { LaunchDetails } from './Components/LaunchDetails';
//redux
import { Provider } from 'react-redux';
import Store from './Store';


function App() {

  return (
   
      <Provider store={Store}>
        <Routes>
          <Route exact path='/' element={<LaunchList />}></Route>
          <Route path='/details' element={<LaunchDetails />}></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Provider>
    
  );
}

export default App;
