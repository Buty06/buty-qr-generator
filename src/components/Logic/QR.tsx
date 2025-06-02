import { useState } from "react";
import QRCode from "react-qr-code";
import "../../styles/QR.css";

export const QR: React.FC = () => {
  const [urlName, setUrlName] = useState("");

  const handlerQRGenerator = (event: React.MouseEvent) => {
    event.preventDefault();

    const inputElement = document.getElementById("input") as HTMLInputElement;
    const value: string = inputElement.value;

    setUrlName(value);
  };

  return (
    <section>
      <form className="main_form">
        <input type="text" id="input" className="main_input" />
        <button onClick={handlerQRGenerator} className="main_button">
          Generar
        </button>
      </form>

      <div className="main_QR">
        <QRCode value={urlName} size={256}></QRCode>
      </div>
    </section>
  );
};
