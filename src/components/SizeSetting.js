import React from 'react';

class SizeSetting extends React.Component {

  changeSize(value){
    this.props.onChangeSize(value)
  }

  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Size : {this.props.fontSize}px</h3>
        </div>
        <div className="panel-body">
          <button type="button" onClick={()=>this.changeSize(-2)} className="btn btn-success" >Giảm</button>&nbsp;
          <button type="button" onClick={()=>this.changeSize(+2)} className="btn btn-success" >Tăng</button>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
