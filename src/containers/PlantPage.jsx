import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchPlant } from '../actions/index.actions';

import Plant from '../components/Plant'
// import './Dashboard.css';

class PlantPage extends Component {
  componentDidMount() {
      this.props.fetchPlant();
      console.log(this.props);
  }

  render() {
    return (
      <div className="plantPage">
        {this.props.appState.isFetchingPlant ?
          <div>
            <h2>Loading...</h2>
          </div>
          :
          <div>
            <h2>Plant - {this.props.match.params.id}</h2>
            {this.props.match.params.plantName}
            {this.props.match.params.plantDate}
            {this.props.match.params.plantLocation}
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  garden: state.garden,
  appState: {
    isFetchingPlant: state.appState.isFetchingPlant,
  },
})

export default connect(mapStateToProps, { fetchPlant })(PlantPage);
