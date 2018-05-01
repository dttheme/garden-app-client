import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchGarden, deletePlant } from '../actions/index.actions';

import Plant from '../components/Plant'

// TODO: Why are Tachyon styles not being applied to Plant component?

class GardenPage extends Component {
  componentDidMount() {
    this.props.fetchGarden();
  }

  render() {
    return (
      <div className="w-90 w-60-ns mt5 ml7-ns ml5-m ba-ns bw2-ns pl6-ns pl4-m pl4 pb4">
            <h2
              className="f2 tracked"
              >
              Garden
            </h2>
            <div className="flex flex-row flex-wrap justify-around items-stretch">
            {this.props.garden.plants.length >0 && this.props.garden.plants.map((plant, index) => (
                <Plant
                  key={`garden-plant-${Math.random()}-${index}`}
                  plant={plant}
                  deleteHandler={this.props.deletePlant}

                />
            ))}
          </div>
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
