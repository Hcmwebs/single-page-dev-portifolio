import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`


@import url('https://fonts.googleapis.com/css?family=Space+Grotesk:500,700');

:root{

  --bgColor:rgba(21,21,21,1.0);
  --footerBgColor:rgba(36,36,36,1.0);
  --bodyColor:rgba(217,217,217,1.0);
  --headingColor:rgba(255,255,255,1.0);
  --accent:rgba(78,225,160,1.0);
  --error: rgba(255, 111, 91, 1.0);
  --maxWidth:1440px;
  --fixedWidth:600px;
  --transition-1: all 0.3s ease-in-out;
  --transition-2: all 0.6s ease-in-out;
  --transition-3: all 0.8s ease-in-out;


  --shadow1:

}

*, *::before, *::after{
  padding: 0;
	margin: 0;
	box-sizing:border-box;
  font: inherit;
}


html {
  font-size: 100%;
  color-scheme: dark light;
} /*16px*/

body {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.75;
  color: var(--bodyColor);
  background:var(--bgColor);
  min-height: 100vh;
  display: grid;
  place-items: center;

}

h1, h2, h3, h4, h5,h6, p  {
  margin: 0 ;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.3;
}

h1 {
  font-size: 3.052rem;
}

h2 {font-size: 2.441rem;}

h3 {font-size: 1.953rem;}

h4 {font-size: 1.563rem;}

h5 {font-size: 1.25rem;}

small, .text_small {font-size: 0.8rem;}


img, picture, svg {
  display: block;
  max-width:100%;
  object-fit: cover;
}

a{
  text-decoration: none;
  color: var(--headingColor)
}

`

export default GlobalStyles
