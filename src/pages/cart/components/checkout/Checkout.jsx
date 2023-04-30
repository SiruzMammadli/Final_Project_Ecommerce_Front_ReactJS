import React from "react";
import "./styles/checkout.scss";

export const Checkout = () => {
  return (
    <div className="checkout_container">
      <div className="checkout_widget">
        <h5 className="title">Sifarişin tutarı</h5>
        <div className="checkout_table_container">
          <table className="checkout_table">
            <tbody>
              <tr className="subtotal">
                <td>Məhsulların cəmi</td>
                <td>117.00₼</td>
              </tr>
              <tr className="shipping">
                <td>Çatdırılma</td>
                <td>
                  <div className="input_group">
                    <input type="radio" name="shipping" id="radio1" checked />
                    <label htmlFor="radio1">Pulsuz çatdırılma</label>
                  </div>
                  <div className="input_group">
                    <input type="radio" name="shipping" id="radio2" />
                    <label htmlFor="radio2">Ölkə daxili: 35.00₼</label>
                  </div>
                  <div className="input_group">
                    <input type="radio" name="shipping" id="radio3" />
                    <label htmlFor="radio3">Sabit qiymət: 12.00₼</label>
                  </div>
                </td>
              </tr>
              <tr className="tax">
                <td>Vergi</td>
                <td>8.00₼</td>
              </tr>
              <tr className="total">
                <td>Cəmi</td>
                <td className="total_amount">125.00₼</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
