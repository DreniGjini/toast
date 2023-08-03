export interface IToastOptions {
  transitionTimingFunction?:
    | "ease"
    | "ease-in-out"
    | "ease-in"
    | "ease-out"
    | "linear";
  time?: number;
  position?: "top" | "bottom";
}

export interface IToast {
  id: number;
  title?: string;
  description?: string;
  type: "success" | "danger" | "warning";
}
