import "./styles/_footer.scss";
import "./styles/_responsive_footer.scss";
import React from "react";
import ServiceArea from './components/service-area/ServiceArea'

export default function Footer() {
  return (
    <React.Fragment>
      <ServiceArea/>
      <footer className="footer">
        <div className="container">
          <div className="widget_wrapper">
            <div className="widget">
              <h5 className="widget_title">Dəstək</h5>
              <p>Şamil Kamilov 1, Bakı şəhəri, Azərbaycan</p>
              <ul className="support_list">
                <li>
                  <a href="#">
                    <i class="bx bx-envelope-open icon"></i> numune@domain.az
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bx bx-phone icon"></i> (+994) 070-664-86-68
                  </a>
                </li>
              </ul>
            </div>
            <div className="widget">
              <h5 className="widget_title">Hesab</h5>
              <ul className="account_list link_list">
                <li>
                  <a href="#">
                    Mənim hesabım
                  </a>
                </li>
                <li>
                  <a href="#">
                    Giriş / Qeydiyyat
                  </a>
                </li>
                <li>
                  <a href="#">
                    Səbət
                  </a>
                </li>
                <li>
                  <a href="#">
                    İstək siyahısı
                  </a>
                </li>
                <li>
                  <a href="#">
                    Mağaza
                  </a>
                </li>
              </ul>
            </div>
            <div className="widget">
              <h5 className="widget_title">Keçidlər</h5>
              <ul className="quick_list link_list">
                <li>
                  <a href="#">
                    Məxfilik
                  </a>
                </li>
                <li>
                  <a href="#">
                    Şərtlər və qaydalar
                  </a>
                </li>
                <li>
                  <a href="#">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#">
                    Əlaqə
                  </a>
                </li>
              </ul>
            </div>
            <div className="widget">
              <h5 className="widget_title">Applikasiyanı yüklə</h5>
              <div className="download_btn_group">
                <div className="qr-code">
                  <img src="/assets/img/others/qr.png" alt="" />
                </div>
                <div className="app_link">
                  <a href="#" alt="App Store">
                    <img src="/assets/img/others/app-store.png" alt="" />
                  </a>
                  <a href="#" alt="Play Store">
                  <img src="/assets/img/others/play-store.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
