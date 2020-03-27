import React, {Component} from 'react';

class Jlcr extends Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      hello: 'Me voy'
    }
  }
  render()
  {
    return(
      <h1>{this.state.hello}</h1>
    )
  }
};
export default Jlcr;
