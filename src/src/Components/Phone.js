import React, { Component } from 'react';
class Phone extends Component {

  showRating(phone){
    let result =[];
    for(let i=1;i<=phone.rating;i++){
      
      result.push(<i key={i} className="icontgdd-ystar"></i>);
    }
    for(let i=phone.rating+1;i<=6;i++){
      result.push(<i  key={i} className="icontgdd-gstar"></i>);
    }
    result.push(<span key={7}>{phone.numberReview} đánh giá</span>)
    return result;
  }
  showPromotions(phone){
    let result =[];
    
    for(let i=0;i<phone.promotions.length;i++){
      result.push(<span key={i}>{phone.promotions[i].content}</span>);
    }
    return result;
  }
  showStringPromotions(km) {
    let kmarr =[];
    if(km%4===0)
    kmarr.push(<span key={km} className="plabel">
    <i></i>Khuyến mãi
  </span>);
    return kmarr;
  }
  render() {
    var {phone,km} = this.props;
    return (
        
        <a href="/">
        <div className="fleft">
          <img alt="ss" width="180" height="180" src={phone.image}/>
        </div>
        <div className="fright">
          <h3>{phone.name}</h3>
          <div className="price">
            <strong>{phone.price}$</strong>
          </div>
          <div className="ratingresult">
            {this.showRating(phone)}
          </div>

          <div className="promotion">
            {this.showStringPromotions(km)}
            {this.showPromotions(phone)}
          </div>
          <div className="button">
            <button type="button" className="btn_buynow" >Mua</button>
            <button type="button" className="btn_buyins" >Mua trả góp</button>
          </div>
        </div>
      </a>

    );
}
}

export default Phone;