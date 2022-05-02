import * as React from 'react';
import {Path, Svg} from 'react-native-svg';

export const SvgProfile = () =>  {

  return (
    <Svg width="30px" height="30px" 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100.353 100.353"
    style={{
      enableBackground: "new 0 0 100.353 100.353",
      alignSelf:"center",
      marginLeft: -2
    }}
    xmlSpace="preserve"
  >
    <Path style={{
        fill: "#000000",
      }} d="M51.775 54.264C31.718 54.264 15.4 71.193 15.4 92a1.5 1.5 0 0 0 1.5 1.5h69.75a1.5 1.5 0 0 0 1.5-1.5c0-20.807-16.317-37.736-36.375-37.736zM18.431 90.5c.757-18.46 15.424-33.236 33.345-33.236 17.92 0 32.587 14.776 33.345 33.236h-66.69zM51.146 50.142c11.568 0 20.98-9.74 20.98-21.713S62.715 6.716 51.146 6.716s-20.979 9.74-20.979 21.713 9.411 21.713 20.979 21.713zm0-40.426c9.914 0 17.98 8.395 17.98 18.713s-8.066 18.713-17.98 18.713-17.979-8.395-17.979-18.713S41.232 9.716 51.146 9.716z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </Svg>
  );
}