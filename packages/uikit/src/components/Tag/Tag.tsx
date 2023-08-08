import React from "react";
import { scales, TagProps } from "./types";
import { StyledTag } from "./StyledTag";
import { Box } from '@pancakeswap/uikit'

const Tag: React.FC<React.PropsWithChildren<TagProps>> = ({ startIcon, endIcon, children, ...props }) => {
  const modifiedStartIcon = React.isValidElement(startIcon) ? (
    <Box style={{ display: "flex", alignItems: "center" }}>
      <Box style={{ marginRight: "0.5em" }}>{startIcon}</Box>
      {children}
    </Box>
  ) : children;

  const modifiedEndIcon = React.isValidElement(endIcon) ? (
    <Box style={{ display: "flex", alignItems: "center" }}>
      {modifiedStartIcon}
      <Box style={{ marginLeft: "0.5em" }}>{endIcon}</Box>
    </Box>
  ) : modifiedStartIcon;

  return <StyledTag {...props}>{modifiedEndIcon}</StyledTag>;
};


/* eslint-disable react/default-props-match-prop-types */
Tag.defaultProps = {
  variant: "primary",
  scale: scales.MD,
  outline: false,
};

export default Tag;
