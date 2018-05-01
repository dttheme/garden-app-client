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
      <div className="plantPage">
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
