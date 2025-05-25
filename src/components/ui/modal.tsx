import { createPortal } from "react-dom";
import type { PropsWithChildren } from "react";

export const Modal = ({ children }: PropsWithChildren) => {
  return createPortal(<div>{children}</div>, document.body);
};
