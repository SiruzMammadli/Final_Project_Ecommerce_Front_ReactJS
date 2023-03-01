import "./styles/newsletter.scss";

export default function Newsletter({letterBgImage}) {
  return (
    <div className="newsletter">
      <div className="container p-inline-15">
        <div className="newsletter_wrapper" style={{
            backgroundImage: `url(${letterBgImage})`,
        }}>
          <h2 className="title">Həftəlik yeniləmələrdən xəbərdar olun</h2>
          <div className="input_group">
            <div className="newsletter_inner">
              <i class="bx bxs-envelope icon"></i>
              <input type="text" placeholder="numune@gmail.com" />
            </div>
            <button className="subscribe_btn">Abunə ol</button>
          </div>
        </div>
      </div>
    </div>
  );
}
