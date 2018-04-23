import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchGarden } from '../actions/index.actions';

import Plant from '../components/Plant'
// import './Dashboard.css';

class GardenPage extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    //this.props.fetchGarden(this.props.match.params.id);
  }

  render() {
    return (
      <div className="GardenPage">
        <h2>Plant - {this.props.match.params.id}</h2>
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
