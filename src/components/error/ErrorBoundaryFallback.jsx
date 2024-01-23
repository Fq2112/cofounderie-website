import { useErrorBoundary } from "react-error-boundary";
import { useEffect, useState } from "react";
import { t } from "i18next";
import { titleScroller } from "../../utils/utils";

export default function ErrorBoundaryFallback() {
  const { resetBoundary } = useErrorBoundary();

  const [rotation, setRotation] = useState(0);

  const handleMove = (event) => {
    const eye = document.getElementById("eye");
    const x = eye.offsetLeft + eye.offsetWidth / 2;
    const y = eye.offsetTop + eye.offsetHeight / 2;
    const clientX = event.clientX || event.touches[0].clientX;
    const clientY = event.clientY || event.touches[0].clientY;
    const rad = Math.atan2(clientX - x, clientY - y);
    const rot = rad * (180 / Math.PI) * -1 + 180;
    setRotation(rot);
  };

  useEffect(() => titleScroller(t("error.boundary.title")), []);

  useEffect(() => {
    const eventListener = window.innerWidth > 1024 ? "mousemove" : "touchmove";
    document.body.addEventListener(eventListener, handleMove);

    return () => {
      document.body.removeEventListener(eventListener, handleMove);
    };
  }, []);

  const EyeBall = () => {
    return (
      <div
        id="eye"
        className="bg-white rounded-[50%] inline-block h-[100px] w-[100px] relative after:content-[''] after:w-[33px] after:h-[33px] after:absolute after:bg-black after:rounded-[50%] after:bottom-[calc(0.561*100px)] after:right-[calc(0.33*100px)]"
        style={{
          transform: `rotate(${rotation}deg)`,
          WebkitTransform: `rotate(${rotation}deg)`,
        }}
      ></div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#333] w-screen h-screen text-white text-center">
      <div style={{ marginTop: "-5rem" }}>
        <span
          className="font-arialBlack"
          style={{ fontSize: window.innerWidth > 1024 ? "8em" : "12em" }}
        >
          5
        </span>

        {[1, 2].map((v, i) => (
          <EyeBall key={`eyeball-${i}`} />
        ))}
      </div>

      <p
        className="font-arialBlack mb-16 max-w-[calc(100%-70px)]"
        style={{
          fontSize: window.innerWidth > 1024 ? "14px" : "16px",
        }}
      >
        {t("error.boundary.message")}
      </p>
      <button
        className="font-arialBlack text-white uppercase cursor-pointer text-lg hover:text-[#d3d3d3]"
        onClick={() => {
          resetBoundary();
          window.location.reload();
        }}
      >
        {t("error.boundary.button")}
      </button>
    </div>
  );
}
