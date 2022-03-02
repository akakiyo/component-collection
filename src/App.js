import { Route, Routes } from "react-router-dom";
import ApexCharts from "./components/Chart/ApexCharts";
import Alert from "./components/Alert/Alert";
import Top from "./Top";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Top />} />
      <Route exact path="/chart" element={<ApexCharts />} />
      <Route exact path="/alert" element={<Alert />} />
    </Routes>
  );
};
export default App;
