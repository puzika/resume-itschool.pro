import { css } from "styled-components";

const device = {
   mbmin: 400,   // for small screen mobile
   mb: 600,   // for mobile screen 
   tbmin: 800, //for small tablets
   tb: 1024,   // for tablets
}

export const responsive = {
   mbmin: (...args) => css`
      @media only screen and (max-width: ${device.mbmin}px) {
         ${css(...args)};
      }
   `,
   mb: (...args) => css`
      @media only screen and (max-width: ${device.mb}px) {
         ${css(...args)};
      }
   `,
   tbmin: (...args) => css`
      @media only screen and (max-width: ${device.tbmin}px) {
         ${css(...args)};
      }
   `,
   tb: (...args) => css`
      @media only screen and (max-width: ${device.tb}px) {
         ${css(...args)};
      }
   `,
}