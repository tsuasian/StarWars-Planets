import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetData: this.props.planetData
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className = "table-container">
        <div>
          {this.state.planetData.map((planet) =>
            <div>
              Name: {planet.name}
            </div>
          )}
        </div>
      </div>
    )
  }

}

export default Table;
