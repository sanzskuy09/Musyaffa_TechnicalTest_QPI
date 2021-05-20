import { Container } from "react-bootstrap";
import { Bar, defaults } from "react-chartjs-2";
import PageNumber from "./PageNumber";

const BarChart = ({ dataPeople, items }) => {
  const name = dataPeople?.map((e) => e.name);
  const height = dataPeople?.map((e) => e.height);
  const mass = dataPeople?.map((e) => e.mass);

  defaults.global.defaultFontSize = 15;
  defaults.global.legend.position = "right";
  defaults.global.title.fontSize = 18;

  return (
    <Container>
      <section>
        <Bar
          data={{
            labels: name,
            datasets: [
              {
                label: "Height",
                data: height,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 0.2)",
                borderWidth: 2,
              },
              {
                label: "Mass",
                data: mass,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 0.2)",
                borderWidth: 2,
              },
            ],
          }}
          height={400}
          widht={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontColor: "black",
              },
            },
            title: {
              display: true,
              text: "Data Mass & Height of People",
              fontColor: "black",
            },
          }}
        />
      </section>
      {/* Pagination */}
      <PageNumber items={items} />
    </Container>
  );
};

export default BarChart;
