import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import Slider from 'material-ui/Slider';

// import './App.css';


class App extends React.Component {
  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <ToolbarTitle text="Tony Luisi" />
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton label="About" />
          <RaisedButton label="Blog"  />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default App;
