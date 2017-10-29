import React from 'react';

export default class GodRow extends React.Component {
  render() {
    var godurl=`https://edisaac.github.io/gods/${this.props.name}.png`;
    return <div>
      <img src={godurl} alt={this.props.name} width={this.props.size} height={this.props.size} />  </div>
  }
}
