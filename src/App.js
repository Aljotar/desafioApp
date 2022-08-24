import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { TableScreen } from './screen/TableScreen';
import { FormScreen } from './screen/FormScreen';
import { NavHeader } from './components/NavHeader';





function App() {
  return (
    <>
      <NavHeader />
      <Routes>
        <Route path="/table" element={<TableScreen />} />
        <Route path="/form" element={<FormScreen />} />
      </Routes>
    </>
  );
}

export default App;
