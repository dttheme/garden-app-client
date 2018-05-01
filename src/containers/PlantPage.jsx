import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchPlant } from '../actions/index.actions';

import Plant from '../components/Plant'


class PlantPage extends Component {
  componentDidMount() {
      this.props.fetchPlant(this.props.match.params.id);
  }

  render() {
    return (
      <div className="w-90 w-60-ns mt5 ml7-ns ml5-m ba-ns bw2-ns pl6-ns pl4-m pl4 pb4">
        {this.props.appState.isFetchingPlant ?
          <div>
            <h2>Loading...</h2>
          </div>
          :
          //
          <div>
            {this.props.currentPlant && <Plant isNotLinking plant={this.props.currentPlant} /> }
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPlant: state.garden.currentPlant,
  appState: {
    isFetchingPlant: state.appState.isFetchingPlant,
  },
})

export default connect(mapStateToProps, { fetchPlant })(PlantPage);
