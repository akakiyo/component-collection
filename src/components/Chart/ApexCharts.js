import LineChart from "./LineChart";
import DonutChart from "./DonutChart";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ApexCharts = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>LineChart</Tab>
        <Tab>DonutChart</Tab>
      </TabList>
      <TabPanel>
        <LineChart />
      </TabPanel>
      <TabPanel>
        <DonutChart />
      </TabPanel>
    </Tabs>
  );
};

export default ApexCharts;
