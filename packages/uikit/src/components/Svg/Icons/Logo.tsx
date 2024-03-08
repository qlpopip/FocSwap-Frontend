import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  // Define the style with margin-bottom of 8px
  // const iconStyle = {
  //   marginBottom: '8px',
  // };

  return <img src="/images/logo_foc.svg" alt="logo" width={120} height={50} />;
};

export default Icon;
