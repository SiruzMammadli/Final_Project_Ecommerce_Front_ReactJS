import "./styles/loading-spinner.scss";

export default function LoadingSpinner({ svgWidth, svgHeight, circleWidth }) {
  return (
    <div className="spinner">
      <svg
        viewBox="0 0 100 100"
        style={{
          width: svgWidth || 100,
          height: svgHeight || 100,
        }}
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          style={{
            strokeWidth: circleWidth || 4,
          }}
        ></circle>
      </svg>
    </div>
  );
}
