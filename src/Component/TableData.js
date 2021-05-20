import { Container, Table } from "react-bootstrap";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import PageNumber from "./PageNumber";

const TableData = ({ dataPeople, items }) => {
  return (
    <Container>
      <Zoom>
        {/* Table Data */}
        <Table bordered hover>
          <thead>
            <tr style={{ backgroundColor: "#4fa4ff" }}>
              <th>No</th>
              <th>Name</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Hair Color</th>
              <th>Skin Color</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "#ffff" }}>
            {dataPeople?.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.height}</td>
                <td>{data.mass}</td>
                <td>{data.hair_color}</td>
                <td>{data.skin_color}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* Pagination */}
        <PageNumber items={items} />
      </Zoom>
    </Container>
  );
};

export default TableData;
