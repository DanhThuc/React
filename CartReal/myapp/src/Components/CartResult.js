import React, { Component } from 'react';


class CartResult extends Component {


    onChange=()=>{

    }

    render() {
        return (
            <div className="area_total">
                <div className="total ">
                    <b>Tổng tiền (2 sản phẩm):</b>
                    <strong id="totalOr" data-val="750000.0">750.000₫</strong>
                </div>
                <div id="cod" className="hide">
                    <span>Phí vận chuyển:</span>
                    <span className="price-color">+</span>
                </div>
                <div id="promotiondiscount" className="hide">
                    <span>Giảm:</span>
                    <span className="price-color">-</span>
                </div>
                <div id="totalCopuon" className="hide">
                    <span>
                        <label>Sử dụng mã giảm giá</label>:
                            <a href="/home">(Hủy)</a>
                    </span>
                    <span id="disCoupon">-</span>
                </div>

                <div id="totalSum" className="total hide">
                    <b>Cần thanh toán:</b>
                    <strong id="sum" data-val="750000.0">750.000₫</strong>
                </div>
                <div id="areaCoupon" className="">
                    <div className="freeship hide"><i className="iconcart-check"></i> Đơn hàng được <b>miễn phí</b> giao hàng</div>
                    <div className="textcode">
                        Sử dụng mã giảm giá
                        </div>
                    <div className="inputcode">
                        <button type="button" id="btnCoupon">Áp dụng</button>
                        <input id="ApplyCoupon" name="ApplyCoupon" type="hidden" value="False" />
                        <input  id="Coupon" onChange ={this.onChange} maxLength="20" name="Coupon" placeholder="Nhập mã giảm giá" type="text" value="" />
                        <label id="coupon-error" className="texterror"></label>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartResult;
