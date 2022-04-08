import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Unit from './components/Unit';
import { DispachType, getItem } from './redux/libReducer';
import { AppStateType } from './redux/store';

function App() {
  let dispatch: DispachType = useDispatch();
  let arr = useSelector((state: AppStateType) => state.lib);
  useEffect(() => {
    debugger;
    dispatch(getItem());
  }, []);
  debugger;
  const values = arr.map((elem, i) => {
    return <Unit key={elem.toString() + i} temp={elem} ind={i} />;
  });
  return (
    <div className="App">
      <header className="App-header">{values}</header>
    </div>
  );
}

export default App;
