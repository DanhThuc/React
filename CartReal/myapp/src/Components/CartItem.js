import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    var {item} = this.props;
	
    return (
        <li >
		<div className="colimg">
			<a href="/">
				<img width="55" alt="x" src={item.phone.image} /></a>
			<button type="button" className="delete"><span></span>Xóa</button>
		</div>
		<div className="colinfo">
			<strong>{item.phone.price}$</strong>
			<a href="/dong-ho-thong-minh/apple-watch-s1-42mm">{item.phone.des}</a>
			<div className="promotion  webnote">
				<div className="title">
					<label>1 khuyến mãi áp dụng đến 31/12</label>
				</div>
				<span className="pro447286">{item.phone.promotions[0].content}
					<label className="infoend"> (đến 31/12)</label></span>
			</div>
			<div>
				<span className="pro447286">{item.phone.promotions[0].content}
					<label className="infoend"> (đến 31/12)</label></span>
			</div>

			<div className="onecolor">
				<span>Màu:</span> Xám
			</div>
			<input type="hidden" className="ProductCode" name="ListNone[0].ProductCode" value="0232391000090" />
			<input type="hidden" className="ProductNameCode" name="ListNone[0].ProductNameCode" value="Xám" />
			<div className="choosenumber">
                <input type="hidden" className="hdQuantity" name="ListNone[0].Quantity" value="3"/>
                <div className="abate active"></div>
                <div className="number">{item.quantity}</div>
                <div className="augment "></div>
            </div>
			<div className="clr"></div>
			<input type="hidden" className="hdIsBuyComBo" name="ListNone[0].IsBuyComBo" value="false" />


		</div>
	</li>
    );
  }
}

export default CartItem;

