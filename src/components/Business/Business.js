import React from 'react';
import './Business.css';


class Business extends React.Component {
  render() {
    return (
      <div className="Business">
  <div className="image-container">
    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
  </div>
  <h2>{this.prop.business.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{this.prop.business.address}</p>
      <p>{this.prop.business.city}</p>
      <p>{this.prop.business.state} {this.prop.business.zipCode}</p>
    </div>
    <div className="Business-reviews">
      <h3>{this.prop.business.category}</h3>
      <h3 className="rating">{this.prop.business.rating}</h3>
      <p>{this.prop.business.reviewCount} reviews</p>
    </div>
  </div>
</div>)
    }
  }


export default Business;
