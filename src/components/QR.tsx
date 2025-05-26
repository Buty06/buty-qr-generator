import { useState } from "react";

export const QR = () => {
  const [urlName, setUrlName] = useState("");

  const handlerQRGenerator = (event: React.MouseEvent) => {
    event.preventDefault();

    const inputElement = document.getElementById("input") as HTMLInputElement;
    const value: string = inputElement.value;

    if (!value.includes("https://") || !value.includes("http://")) {
      setUrlName("Tiene que ser una url el valor ingresado");
    } else {
      setUrlName(value);
    }
  };

  return (
    <section>
      <form>
        <input type="text" id="input" />
        <button onClick={handlerQRGenerator}>Push Me</button>
      </form>

      <p>{urlName}</p>
    </section>
  );
};
