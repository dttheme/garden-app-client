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
      <div className="dark-gray bg-dark-green w-100 w-80-m w-60-ns mt7-m mt6-ns ml7-ns ml5-m ba-ns bw3-ns b--green pl6-ns pl4-m pl4 pb4">
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
