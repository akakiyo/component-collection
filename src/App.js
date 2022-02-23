import { Route, Navigate, Routes } from "react-router-dom";
import ApexCharts from "./components/Chart/ApexCharts";

const App = () => {
  return (
    <Routes>
      <Route exact path="/charts" element={<ApexCharts />} />
    </Routes>
  );
};
export default App;
