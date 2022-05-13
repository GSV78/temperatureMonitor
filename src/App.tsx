import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chart from './components/Chart';
import Diagramm from './components/Diagramm';
import Unit from './components/Unit';
import { DispachType, getItem } from './redux/libReducer';
import { AppStateType } from './redux/store';

function App() {
  let dispatch: DispachType = useDispatch();
  let arr = useSelector((state: AppStateType) => state.lib.arr);

  useEffect(() => {
    dispatch(getItem());
    setInterval(() => {
      dispatch(getItem());
    }, 10000);
  }, []);

  const values = arr.map((elem, i) => {
    if (elem) {
      return <Unit key={elem.toString() + i} temp={elem} ind={i} />;
    }
  });
  return (
    <div className="App">
      <h2>Текущие показания датчиков:</h2>
      <div className="App-header">
        <div className="items">{values}</div>
        <Diagramm />
      </div>
      <div className="charts">
        <h2>Суточный график:</h2>
        <Chart />
      </div>
    </div>
  );
}

export default App;
