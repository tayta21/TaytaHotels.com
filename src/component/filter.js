import React from 'react';
import Rating from './rating';


class Filter extends React.Component {
    state = {
      filter: "",
    };
  
    handleChange = event => {
      this.setState({ filter: event.target.value });
      this.props.getFilter(event.target.value)
    };
  
    render() {
      const { filter , setFilter } = this.state;
      return (
        <div>
          <input style={{margin:'12px'}} placeholder="filter" value={filter} onChange={this.handleChange} />
        </div>
      );
    }
  }
  export default Filter