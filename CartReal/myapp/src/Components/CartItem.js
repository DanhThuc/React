import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    var {item} = this.props;
    return (
        <li >
		<div class="colimg">
			<a href="/">
				<img width="55" src={item.phone.image} /></a>
			<button type="button" class="delete"><span></span>Xóa</button>
		</div>
		<div class="colinfo">
			<strong>8.990.000₫</strong>
			<a href="/dong-ho-thong-minh/apple-watch-s1-42mm">Apple Watch S1, 42mm viền nhôm, dây cao su màu đen</a>
			<div class="promotion  webnote">
				<div class="title">
					<label>1 khuyến mãi áp dụng đến 31/12</label>
				</div>
				<span class="pro447286">Giảm ngay 2 triệu
					<label class="infoend">(đến 31/12)</label></span>
			</div>
			<div>
				<span >Giảm <strong className="duc">2.000.000₫</strong> còn <strong className="duc">6.990.000₫</strong></span>
			</div>

			<div class="onecolor">
				<span>Màu:</span> Xám
			</div>
			<input type="hidden" class="ProductCode" name="ListNone[0].ProductCode" value="0232391000090" />
			<input type="hidden" class="ProductNameCode" name="ListNone[0].ProductNameCode" value="Xám" />
			<div class="choosenumber">
                <input type="hidden" class="hdQuantity" name="ListNone[0].Quantity" value="3"/>
                <div class="abate active"></div>
                <div class="number">1</div>
                <div class="augment "></div>
            </div>
			<div class="clr"></div>
			<input type="hidden" class="hdIsBuyComBo" name="ListNone[0].IsBuyComBo" value="false" />


		</div>
	</li>
    );
  }
}

export default CartItem;

