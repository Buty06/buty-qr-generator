import { useState } from "react";
import QRCode from "react-qr-code";
import "../../styles/QR.css";

export const QR: React.FC = () => {
  const [urlName, setUrlName] = useState("");
  const [bgColor, setBgColor] = useState("#fff");
  const [fgColor, setFgColor] = useState("#000");

  const handlerQRGenerator = (event: React.MouseEvent) => {
    event.preventDefault();

    const inputTextElement = document.getElementById(
      "input"
    ) as HTMLInputElement;
    const valueText: string = inputTextElement.value;

    const inputBgColor = document.getElementById("bgColor") as HTMLInputElement;
    const valueBgColor: string = inputBgColor.value;

    const inputFgColor = document.getElementById("fgColor") as HTMLInputElement;
    const valueFgColor: string = inputFgColor.value;

    setUrlName(valueText);
    setBgColor(valueBgColor);
    setFgColor(valueFgColor);
  };

  return (
    <section>
      <form className="main_form">
        <input type="text" id="input" className="main_input" />

        <section className="main_button_input">
          <input type="color" id="bgColor" className="main_button" />

          <input type="color" id="fgColor" className="main_button" />

          <button onClick={handlerQRGenerator} className="main_button">
            Generar
          </button>
        </section>
      </form>

      <div className="main_QR">
        <QRCode
          value={urlName}
          size={256}
          bgColor={bgColor}
          fgColor={fgColor}
        ></QRCode>
      </div>
    </section>
  );
};
