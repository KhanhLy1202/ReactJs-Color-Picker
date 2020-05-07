import React from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSise: 15
    }
  }

  onSetColor = (params) => {
    console.log(params);
    this.setState({
      color: params
    })
  }

  onChangeSize = (value) => {
    if(this.state.fontSise + value >= 8 && this.state.fontSise + value <= 32) {
      this.setState({
        fontSise: this.state.fontSise + value
      })
    }
  }

  onSettingDefault = (value) => {
    if(value) {
      this.setState({
        color: 'red',
        fontSise: 15
      })
    }
  }

  render() {
    return (
      <div className='container mt-50'>
        <div className='row'>
          <ColorPicker color={this.state.color}  onRecieveColor={this.onSetColor}/>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting  
                fontSize={this.state.fontSise} 
                onChangeSize={this.onChangeSize} 
                />
            <Reset onSettingDefault={this.onSettingDefault} />
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSise}/>
        </div>
      </div>
    );
  }
}

export default App;
