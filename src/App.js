import React, { Component } from 'react';
import Tabs from './Tabs';
import Tab from './Tab';


class App extends Component {
  render() {
    return (
      <div>
        <Tabs>
          <Tab title="Tab 1">Some text 1</Tab>
          <Tab title="Tab 2">Some text 2</Tab>
          <Tab title="Tab 3">Some text 3</Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
