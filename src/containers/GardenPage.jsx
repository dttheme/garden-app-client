import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchGarden, deletePlant } from '../actions/index.actions';

import Plant from '../components/Plant'
// import './Dashboard.css';

class GardenPage extends Component {
  componentDidMount() {
    this.props.fetchGarden();
    console.log(this.props.garden.plants);
  }

  render() {
    return (
      <div className="gardenPage ml6 mr6 ba bw2 pa4">
        {this.props.appState.isFetchingGarden ?
          <div>
            <h2>Loading...</h2>
          </div>
          :
          <div>
            <h2
              className="f2 h3 tc"
              >
              Garden
            </h2>
            {this.props.garden.plants.length >0 && this.props.garden.plants.map((plant, index) => (
                <Plant key={`garden-plant-${Math.random()}-${index}`} plant={plant} deleteHandler={this.props.deletePlant} />
            ))}
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  garden: state.garden,
  appState: {
    isFetchingGarden: state.appState.isFetchingGarden,
  },
})

export default connect(mapStateToProps, { fetchGarden, deletePlant })(GardenPage);
