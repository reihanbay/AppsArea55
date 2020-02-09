import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const SvgYT = props => (
  <Svg width="30" height="30" viewBox="0 0 25 25" fill="none" {...props}>
    <Path
      d="M3.7207 22.0215H21.3965C23.4158 22.0215 25.0586 20.3787 25.0586 18.3594V6.64062C25.0586 4.62132 23.4158 2.97852 21.3965 2.97852H3.7207C1.70139 2.97852 0.0585938 4.62132 0.0585938 6.64062V18.3594C0.0585938 20.3787 1.70139 22.0215 3.7207 22.0215ZM1.52344 6.64062C1.52344 5.42908 2.50916 4.44336 3.7207 4.44336H21.3965C22.608 4.44336 23.5938 5.42908 23.5938 6.64062V18.3594C23.5938 19.5709 22.608 20.5566 21.3965 20.5566H3.7207C2.50916 20.5566 1.52344 19.5709 1.52344 18.3594V6.64062Z"
      fill="white"
    />
    <Path
      d="M8.89648 7.59314V17.5491L17.71 12.4895L8.89648 7.59314ZM10.3613 10.0826L14.7314 12.5105L10.3613 15.0192V10.0826Z"
      fill="white"
    />
    <Rect x="0.0585938" width="25" height="25" fill="none" />
  </Svg>
);

export default SvgYT;
