import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchGarden } from '../actions/index.actions';

import Plant from '../components/Plant'
// import './Dashboard.css';

class GardenPage extends Component {
  componentDidMount() {
    this.props.fetchGarden();
    console.log(this.props.garden.plants);
  }

  render() {
    return (
      <div className="gardenPage">
        {this.props.appState.isFetchingGarden ?
          <div>
            <h2>Loading...</h2>
          </div>
          :
          <div>
            <h2>Garden</h2>
            {this.props.garden.plants.length && this.props.garden.plants.map((plant, index) => (
                <Plant key={`garden-plant-${Math.random()}-${index}`} plant={plant} />
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

export default connect(mapStateToProps, { fetchGarden })(GardenPage);
