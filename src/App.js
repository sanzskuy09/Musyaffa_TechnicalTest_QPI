import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

// import "./Component/style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table, Pagination } from "react-bootstrap";

import TableData from "./Component/TableData";
import Header from "./Component/Header";
import BarChart from "./Component/BarChart";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(1);

  const getDataPeople = () => {
    axios
      .get(`https://swapi.dev/api/people/?page=${active}`)
      .then((response) => setData(response));
  };

  let items = [];
  for (let number = 1; number <= 9; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setActive(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  // localStorage.setItem(`dataPage-${active}`, JSON.stringify(data));
  const dataFromLocal = localStorage.getItem(`dataPage-${active}`);
  const dataToObject = JSON.parse(dataFromLocal);

  const dataPeople = dataToObject?.data?.results;

  useEffect(() => {
    getDataPeople();
  }, [active]);

  useEffect(() => {
    localStorage.getItem(`dataPage-${active}`) !== null
      ? localStorage.getItem(`dataPage-${active}`)
      : localStorage.setItem(`dataPage-${active}`, JSON.stringify(data));
  }, [active]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Dashboard dataPeople={dataPeople} items={items} />
          </Route>
          <Route path="/chart">
            <BarChart dataPeople={dataPeople} items={items} />
          </Route>
          <Route path="/table">
            <TableData dataPeople={dataPeople} items={items} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
