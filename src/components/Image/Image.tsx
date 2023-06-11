import { ComponentPropsWithoutRef } from "react";
export const Image = ({ ...props }: ComponentPropsWithoutRef<"img">) => {
  return <img {...props} />;
};
export default Image;
