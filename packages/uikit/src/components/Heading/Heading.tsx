import styled from "styled-components";
import Text from "../Text/Text";
import { tags, scales, HeadingProps } from "./types";

const style = {
  [scales.MD]: {
    fontSize: "20px",
    fontSizeLg: "20px",
    textShadow: "none",
  },
  [scales.LG]: {
    fontSize: "24px",
    fontSizeLg: "24px",
    textShadow: "none",
  },
  [scales.XL]: {
    fontSize: "40px",
    fontSizeLg: "40px",
    textShadow: "none",
  },
  [scales.XXL]: {
    fontSize: "48px",
    fontSizeLg: "88px",
    textShadow: "none",
  },
};

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  font-size: ${({ scale }) => style[scale || scales.MD].fontSize};
  text-shadow: ${({ scale }) => style[scale || scales.MD].textShadow};
  font-weight: 600;
  line-height: 1.1;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ scale }) => style[scale || scales.MD].fontSizeLg};
  }
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
