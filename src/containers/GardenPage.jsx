import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchGarden, deletePlant } from '../actions/index.actions';

import Plant from '../components/Plant'

// TODO: Why are Tachyon styles not being applied to Plant component?

export class GardenPage extends Component {
  componentDidMount() {
    this.props.fetchGarden();
  }

  render() {
    return (
      <div className="dark-gray bg-dark-green w-100 w-80-m w-60-ns mt7-m mt6-ns ml7-ns ml5-m mb3 ba-ns bw3-ns b--green ph4 pb4">
            <h2
              className="w-100 pt4-ns pt1-m pb3-m pl3 mb0 mb3-ns f3 f2-ns bg-dark-green tracked"
              >
              Garden
            </h2>
            <div className="flex flex-row flex-wrap justify-center justify-start-ns">
            {this.props.garden.plants.length >0 && this.props.garden.plants.map((plant, index) => (
              <div key={`garden-plant-${index}`} className="grow bg-dark-green w-30-ns w-100-m pa4 ma2-ns mb3-m bb bw1 b--green ba-ns shadow-5-ns">
                <Plant
                  plant={plant}
                  deleteHandler={this.props.deletePlant}
                />
              </div>
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
