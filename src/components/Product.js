import React from 'react';

class Product extends React.Component {
  render() {
    return (
      
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img src="https://azpet.com.vn/wp-content/uploads/2019/01/cho-phoc-soc.jpg" alt="Pomeranian"/>
            <div className="caption">
              <h3>Pomeranian</h3>
              <p>
                9.000.000 VNĐ
              </p>
            </div>
            <button type="button" className="btn btn-success">Buy Now</button>
          </div>
        </div>
      
    );
  }
}

export default Product;
