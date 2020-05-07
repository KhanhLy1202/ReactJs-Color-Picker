import React from 'react';

class Header extends React.Component {
  render() {
    return (
      
      <nav className="navbar navbar-inverse" role="navigation">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#/">Lesson1</a>
        </div>
      
        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <li><a href="#/">Home</a></li>
            <li className="active"><a href="#/">Product</a></li>
          </ul>
        </div>
        {/* <!-- /.navbar-collapse --> */}
      </nav>
      
    );
  }
}

export default Header;
