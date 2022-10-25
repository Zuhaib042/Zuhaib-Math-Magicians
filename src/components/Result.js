import React from 'react';

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="result col-span-4 py-4 bg-[#858693] text-2xl text-white text-right pr-2">
        0
      </div>
    );
  }
}
