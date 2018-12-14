import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    return (
        <li data-id="148705" data-idref="0" data-idx="0" data-cateid="1922">
        <input id="Products_0__Removed" name="Products[0].Removed" type="hidden"/>
        <input id="Products_0__Info_Id" name="Products[0].Info.Id" type="hidden" value="148705"/>
        <input id="Products_0__Info_Category_Id" name="Products[0].Info.Category.Id" type="hidden" value="1922"/>
        <input id="Products_0__Info_Selling_Status" name="Products[0].Info.Selling.Status" type="hidden" value="InStock"/>
        <input id="Products_0__Info_IsInstallProduct" name="Products[0].Info.IsInstallProduct" type="hidden" value="0"/>
        <input id="Products_0__Info_IsCombo" name="Products[0].Info.IsCombo" type="hidden" value="0"/>
        <div className="colimg">
          <a href="noi-com-dien/delites-ncg1804" target="_blank">
            <img width="55" height="55" src="https://cdn.tgdd.vn/Products/Images/1922/148705/delites-ncg1804-avatar-300x300.jpg"
              alt="Nồi cơm điện Delites 1.8 lít NCG1804"/>
          </a>
          <button className="del" data-id="148705" type="button">
            <span></span>Xóa</button>
        </div>
        <div className="colinfo">
          <strong className="price-color">
            <span>490.000₫</span>
            390.000₫ </strong>
  
          <a href="noi-com-dien/delites-ncg1804" target="_blank">Nồi cơm điện Delites 1.8 lít NCG1804</a>
          <div className="clr"></div>
          <div className="onecolor">
            <span>Màu:</span> Đen &amp; Bạc
          </div>
          <input id="Products_0__ProductCode" name="Products[0].ProductCode" type="hidden" value="4841471000186"/>
  
          <div className="choosenumber">
            <div className="abate">
              <i></i>
            </div>
            <div className="number">1</div>
            <div className="augment">
              <i></i>
              <i></i>
            </div>
            <input id="Products_0__Quantity" name="Products[0].Quantity" type="hidden" value="1"/>
          </div>
  
          <div className="clr"></div>
        </div>
        <div className="clr"></div>
      </li>
    );
  }
}

export default CartItem;

