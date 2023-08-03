import { useEffect } from "react";
import useToast from "./hooks/useToast";

const ShowCase: React.FC = () => {
  const { addToaster, toastOptions } = useToast();

  // useEffect(() => {
  //   toastOptions({ position: "bottom", transitionTimingFunction: "ease" });
  // }, []);

  return (
    <div>
      <button
        onClick={() =>
          addToaster({
            description: "Error in submitting form",
            id: Math.random(),
            type: "danger",
          })
        }
      >
        Danger
      </button>
      <button
        onClick={() =>
          addToaster({
            description: "Two fields left unchecked",
            id: Math.random(),
            type: "warning",
          })
        }
      >
        Warning
      </button>
      <button
        onClick={() =>
          addToaster({
            description: "Action completed successfully",
            id: Math.random(),
            type: "success",
          })
        }
      >
        Success
      </button>
    </div>
  );
};

export default ShowCase;
