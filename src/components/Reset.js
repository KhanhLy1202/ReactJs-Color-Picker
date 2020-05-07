import React from 'react';

class Reset extends React.Component {

  onResetDefault = () => {
    this.props.onSettingDefault(true);
  }

  render() {
    return (
      <button onClick={this.onResetDefault} type="button" className="btn btn-primary" >Reset</button>
    );
  }
}

export default Reset;
