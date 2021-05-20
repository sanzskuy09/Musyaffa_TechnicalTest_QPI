import { Pagination } from "react-bootstrap";
const PageNumber = ({ items }) => {
  return (
    <>
      <Pagination
        className="justify-content-center mt-4"
        style={{ marginBottom: "5rem" }}
      >
        {items}
      </Pagination>
    </>
  );
};

export default PageNumber;
