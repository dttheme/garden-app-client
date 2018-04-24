import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchGarden } from '../actions/index.actions';

import Plant from '../components/Plant'
// import './Dashboard.css';

class GardenPage extends Component {
  componentDidMount() {
    this.props.fetchGarden();
  }

  render() {
    return (
      <div className="GardenPage">
        {this.props.appState.isFetchingGarden ?
          <div>
            <h2>Loading...</h2>
          </div>
        :
          <div>
            <h2>Garden</h2>
            {this.props.garden.hasOwnProperty('plants') && this.props.garden.plants.map((plant, index) => (
              <Plant plant={plant} key={`garden-plant-${Math.random()}-${index}`} />
            ))}
        </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  garden: state.garden.garden,
  appState: {
    isFetchingGarden: state.appState.isFetchingGarden,
  },
})

export default connect(mapStateToProps, { fetchGarden })(GardenPage);
