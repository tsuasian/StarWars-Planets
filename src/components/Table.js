import React, { Component } from 'react';
import BootStrapTable from 'react-bootstrap/Table';
import axios from 'axios'

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetData: []
    }
  }

  componentDidMount() {
    // this.retrieveData()
  }

  retrieveData() {
    let pageNumber = 1
    while (pageNumber <= 6) {
      axios.get(`https://swapi.dev/api//planets/?page=${pageNumber}`)
        .then((resp) =>  {
          let planets = resp.data.results
          this.setState({
            planetData: [...this.state.planetData, ...planets]
          })
        })
        .catch((err) => {
          console.log("Error: ", err)
        })
      pageNumber++;
    }
  }

  render() {
    console.log(this.props.planetData, "test")
    return (
      <div className = "table-container">
        <div>
          <BootStrapTable responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Population</th>
                <th>Rotation Period</th>
                <th>Orbital Period</th>
                <th>Diameter</th>
                <th>Climate</th>
                <th>Surface Water</th>
              </tr>
            </thead>
            <tbody>
            {this.props.planetData.map((planet) => (
              <tr>
                <td>{planet.name}</td>
                <td>{planet.population}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.surface_water}</td>
             </tr>
           ))}
            </tbody>
          </BootStrapTable>
        </div>
      </div>
    )
  }

}

export default Table;

// {Array.from({ length: 12 }).map((_, index) => (
//   <td key={index}>Table cell {index}</td>
// ))}

// {this.state.planetData.map((planet) =>
//   <div>
//     Name: {planet.name}
//   </div>
// )}
