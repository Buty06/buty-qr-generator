import "./styles/app.css";
import { Description } from "./components/UI/Description";
import { QR } from "./components/Logic/QR";

export const App = () => {
  return (
    <main className="main">
      <Description></Description>
      <QR></QR>
    </main>
  );
};
