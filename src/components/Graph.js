import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Loading from './Loading'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


class Graph extends Component {
  render() {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Planet Attribute Bar Char',
        },
      },
      barThickness: 'flex',
      scaleShowValues: true,
      scales: {
        x: {
          ticks: {
            autoSkip: false
          },
          title: {
            display: true,
            text: "Planets"
          }
        },
      }
    };

    let labels = [];
    let dataPopulation = [];
    let dataRotation = [];
    let dataOrbital = [];
    let dataDiameter = [];
    let dataWater = [];
    let planetData = this.props.planetData
    for (let i = 0; i < planetData.length; i++) {
      labels.push(planetData[i].name)
      dataPopulation.push(parseFloat(planetData[i].population.replace(/,/g, '')));
      dataRotation.push(parseFloat(planetData[i].rotation.replace(/,/g, '')));
      dataOrbital.push(parseFloat(planetData[i].orbital.replace(/,/g, '')));
      dataDiameter.push(parseFloat(planetData[i].diameter.replace(/,/g, '')));
      dataWater.push(parseFloat(planetData[i].surfaceWater.replace(/,/g, '')));
    }

    const data = {
      labels,
      datasets: [
        {
          label: 'Population',
          data: dataPopulation,
          backgroundColor: 'rgba(193, 154, 183, 0.5)',
        },
        {
          label: 'Rotation Period',
          data: dataRotation,
          backgroundColor: 'rgba(156, 149, 220, 0.5)',
          hidden: true
        },
        {
          label: 'Orbital Period',
          data: dataOrbital,
          backgroundColor: 'rgba(34, 140, 219, 0.5)',
          hidden: true
        },
        {
          label: 'Diameter',
          data: dataDiameter,
          backgroundColor: 'rgba(11, 113, 137, 0.5)',
          hidden: true
        },
        {
          label: 'Surface Water',
          data: dataWater,
          backgroundColor: 'rgba(23, 10, 28, 0.5)',
          hidden: true
        }
      ],
    };
    let element;
    if (this.props.planetData.length === 60) {
      element = <Bar options={options} data={data} />
    } else {
      element = <Loading />
    }

    return(
      <Card style={{ overflow:'auto', height:'100%', width:'100%', textAlign:'center'}}>
        <Card.Body>
          {element}
        </Card.Body>
      </Card>
    )
  }
}

export default Graph;

//
// {
//   label: 'Dataset 2',
//   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//   backgroundColor: 'rgba(53, 162, 235, 0.5)',
// },
