import LineChart from "./LineChart";
import DonutChart from "./DonutChart";
import BarChart from "./BarChart";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ApexCharts = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>LineChart</Tab>
        <Tab>DonutChart</Tab>
        <Tab>BarChart</Tab>
      </TabList>
      <TabPanel>
        <LineChart />
      </TabPanel>
      <TabPanel>
        <DonutChart />
      </TabPanel>
      <TabPanel>
        <BarChart />
      </TabPanel>
    </Tabs>
  );
};

export default ApexCharts;
