import { useState, useRef } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import "../../styles/QR.css";

export const QR: React.FC = () => {
  const [urlName, setUrlName] = useState("");
  const [bgColor, setBgColor] = useState("#fff");
  const [fgColor, setFgColor] = useState("#000");
  const qrRef = useRef<HTMLDivElement>(null);
  const inputTextElementRef = useRef<HTMLInputElement>(null);
  const inputBgColorRef = useRef<HTMLInputElement>(null);
  const inputFgColorRef = useRef<HTMLInputElement>(null);

  const handlerQRGenerator = (event: React.MouseEvent) => {
    event.preventDefault();

    const valueText: string = inputTextElementRef.current?.value ?? "";
    const valueBgColor: string = inputBgColorRef.current?.value ?? "#fff";
    const valueFgColor: string = inputFgColorRef.current?.value ?? "#000";

    setUrlName(valueText);
    setBgColor(valueBgColor);
    setFgColor(valueFgColor);
  };

  const dowloadImage = () => {
    if (!qrRef.current) return;

    toPng(qrRef.current).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "qr-code.png";
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <section>
      <form className="main_form">
        <input
          type="text"
          id="input"
          className="main_input"
          required
          ref={inputTextElementRef}
        />

        <section className="main_button_input">
          <input
            type="color"
            id="bgColor"
            className="main_button"
            ref={inputBgColorRef}
          />

          <input
            type="color"
            id="fgColor"
            className="main_button"
            ref={inputFgColorRef}
          />

          <button onClick={handlerQRGenerator} className="main_button">
            Generar
          </button>
        </section>
      </form>

      <div className="main_QR" ref={qrRef}>
        <QRCode
          value={urlName}
          size={256}
          bgColor={bgColor}
          fgColor={fgColor}
        ></QRCode>
      </div>

      <button onClick={dowloadImage}>
        <img src="../../../public/iconsdownload.png" alt="Download" />
      </button>
    </section>
  );
};
