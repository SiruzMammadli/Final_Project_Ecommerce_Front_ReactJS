import "./styles/newsletter.scss";
import "./styles/responsive-newsletter.scss";

export default function Newsletter({ letterBgImage }) {
  return (
    <div className="newsletter">
      <div className="container p-inline-15">
        <div
          className="newsletter_wrapper"
          style={{
            backgroundImage: `url(${letterBgImage})`,
          }}
        >
          <h2 className="title">Həftəlik yeniləmələrdən xəbərdar ol</h2>
          <div className="input_group">
            <div className="newsletter_inner">
              <i className="bx bxs-envelope icon"></i>
              <input type="email" placeholder="numune@gmail.com" />
            </div>
            <button className="subscribe_btn">Abunə ol</button>
          </div>
        </div>
      </div>
    </div>
  );
}
