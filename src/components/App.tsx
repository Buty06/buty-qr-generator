import "../styles/app.css";
import { Description } from "./Description";
import { QR } from "./QR";

export const App = () => {
  return (
    <main className="main">
      <Description></Description>
      <QR></QR>
    </main>
  );
};
