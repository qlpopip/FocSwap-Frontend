import styled from "styled-components";
import Text from "../Text/Text";
import { tags, scales, HeadingProps } from "./types";

const style = {
  [scales.MD]: {
    fontSize: "20px",
    fontSizeLg: "20px",
    textShadow: "none",
    fontFamily: "Inter",
    fontWeignt: "600",
  },
  [scales.LG]: {
    fontSize: "24px",
    fontSizeLg: "24px",
    textShadow: "none",
    fontFamily: "Kanit",
    fontWeignt: "600",
  },
  [scales.XL]: {
    fontSize: "40px",
    fontSizeLg: "40px",
    textShadow: "none",
    fontFamily: "Kanit",
    fontWeignt: "600",
  },
  [scales.XXL]: {
    fontSize: "48px",
    fontSizeLg: "78px",
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
    fontFamily: "Kanit",
    fontWeignt: "500",
  },
  [scales.XXXL]: {
    fontSize: "78px",
    fontSizeLg: "110px",
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
    fontFamily: "Kanit",
    fontWeignt: "600",
  },
};

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  font-size: ${({ scale }) => style[scale || scales.MD].fontSize};
  text-shadow: ${({ scale }) => style[scale || scales.MD].textShadow};
  font-weight: ${({ scale }) => style[scale || scales.MD].fontWeignt};
  line-height: 1.1;
  font-family: ${({ scale }) => style[scale || scales.MD].fontFamily};

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ scale }) => style[scale || scales.MD].fontSizeLg};
  }
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
