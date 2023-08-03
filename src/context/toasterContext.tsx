import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { IToast, IToastOptions } from "../interfaces/IToast.type";
import Toaster from "../components/toaster";

interface IToastContext {
  addToaster: (e: IToast) => void;
  toastOptions: (e: IToastOptions) => void;
  options: IToastOptions;
  toast: IToast[];
  setToast?: Dispatch<SetStateAction<IToast[]>>;
}

export const ToasterContext = createContext<IToastContext>({} as IToastContext);

export const ToasterProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [options, setOptions] = useState<IToastOptions>({} as IToastOptions);

  const [toast, setToast] = useState<IToast[]>([] as IToast[]);

  const addToaster = (cnt: IToast) => {
    setToast([
      ...toast,
      {
        id: Math.random(),
        title: cnt.title,
        type: cnt.type,
        description: cnt.description,
      },
    ]);
  };

  const toastOptions = ({
    time,
    transitionTimingFunction,
    position,
  }: IToastOptions) => {
    setOptions({ time, transitionTimingFunction, position });
  };

  const deleteToast = useCallback(
    (id: number) => {
      const toastListItem = toast.filter((e) => e.id !== id);
      setToast(toastListItem);
    },
    [toast, setToast],
  );

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (toast.length) {
          setToast([]);
        }
      },
      options.time ? options?.time : 6000,
    );

    return () => {
      clearTimeout(timer);
    };
  }, [toast]);

  return (
    <ToasterContext.Provider
      value={{ toast, setToast, options, addToaster, toastOptions }}
    >
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {toast.map((el) => {
          return (
            <Toaster
              tst={el}
              clickHandler={() => deleteToast(el.id)}
              options={options}
            />
          );
        })}
      </div>
      {children}
    </ToasterContext.Provider>
  );
};
