import * as React from 'react';
import Navigationscreen from './src/navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Navigationscreen />
      </>
    );
  }
}
