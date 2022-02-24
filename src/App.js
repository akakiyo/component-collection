import { Route, Routes } from "react-router-dom";
import ApexCharts from "./components/Chart/ApexCharts";
import Alert from "./components/Alert/Alert";

const App = () => {
  return (
    <Routes>
      <Route exact path="/charts" element={<ApexCharts />} />
      <Route exact path="/alert" element={<Alert />} />
    </Routes>
  );
};
export default App;
