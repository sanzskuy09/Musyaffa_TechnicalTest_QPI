import BarChart from "../Component/BarChart";
import TableData from "../Component/TableData";

const Dashboard = ({ dataPeople, items }) => {
  return (
    <>
      <BarChart dataPeople={dataPeople} />
      <TableData dataPeople={dataPeople} items={items} />
    </>
  );
};

export default Dashboard;
