import { useContext } from "react";
import { ToasterContext } from "../context/toasterContext";

const useToast = () => {
  const context = useContext(ToasterContext);
  if (!context) {
    throw Error("ToastContext must be used inside an ToastProvider!");
  }
  return context;
};

export default useToast;
