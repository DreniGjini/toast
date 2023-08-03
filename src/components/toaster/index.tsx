import { IToast, IToastOptions } from "../../interfaces/IToast.type";
import Styles from "./toaster.module.css";

interface IToasterProps {
  tst: IToast;
  options: IToastOptions;
  clickHandler: () => void;
}

const Toaster: React.FC<IToasterProps> = ({ tst, options, clickHandler }) => {
  let type;
  let toastTitle;
  let source;
  let closeButton = "close.png";
  let textColor = "#6E5404";
  switch (tst.type) {
    case "danger":
      type = Styles.danger;
      source = "dangericon.png";
      closeButton = "closewhite.png";
      textColor = "white";
      toastTitle = "Danger!";
      break;
    case "success":
      type = Styles.success;
      source = "successicon.png";
      textColor = "#0F552C";
      toastTitle = "Success!";
      break;
    case "warning":
      type = Styles.warning;
      source = "warningicon.png";
      toastTitle = "Warning!";
  }
  return (
    <div
      className={`${Styles.toaster} ${tst && Styles.show} ${type} ${
        Styles.bottom
      }`}
      style={{
        transitionTimingFunction: options?.transitionTimingFunction,
      }}
    >
      <div className={Styles.wrapper}>
        <div className={Styles.left}>
          <div>
            <img src={source} alt="" />
          </div>
          <div style={{ color: textColor }}>
            <b>{tst.title || toastTitle}</b>
            <p>{tst.description}</p>
          </div>
          <span
            className={Styles.line}
            style={{ animationDuration: `${options?.time || 6000}ms` }}
          />
        </div>
        <div>
          {" "}
          <img
            src={closeButton}
            alt="close"
            style={{ width: "16px", cursor: "pointer" }}
            onClick={clickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Toaster;
