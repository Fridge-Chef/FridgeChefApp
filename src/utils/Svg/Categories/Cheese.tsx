import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {FWidth} from '../../../../globalStyle';

const Cheese = () => {
  return (
    <Svg
      width={FWidth * 32}
      height={FWidth * 32}
      viewBox="0 0 32 32"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 24.9901V27.7499L29 25.1499V14.0999L3 17.3499V21.6462C3.68867 21.8895 4.1821 22.5462 4.1821 23.3181C4.1821 24.0901 3.68867 24.7468 3 24.9901Z"
        fill="#FDD02F"
      />
      <Path
        d="M3 17.35L17.3 5C26.66 5.52 29 11.2833 29 14.1L3 17.35Z"
        fill="#FFE351"
      />
      <Path
        d="M23.5682 19.8625C24.3515 19.8625 24.9864 19.2277 24.9864 18.4444C24.9864 17.6612 24.3515 17.0262 23.5682 17.0262C22.785 17.0262 22.1501 17.6612 22.1501 18.4444C22.1501 19.2277 22.785 19.8625 23.5682 19.8625Z"
        fill="#FFF4D1"
      />
      <Path
        d="M9.03188 20.808C9.55404 20.808 9.97733 20.3847 9.97733 19.8625C9.97733 19.3405 9.55404 18.9171 9.03188 18.9171C8.50972 18.9171 8.08643 19.3405 8.08643 19.8625C8.08643 20.3847 8.50972 20.808 9.03188 20.808Z"
        fill="#FFF4D1"
      />
      <Path
        d="M13.7592 24.2353C14.8035 24.2353 15.6501 23.3887 15.6501 22.3444C15.6501 21.3001 14.8035 20.4535 13.7592 20.4535C12.7148 20.4535 11.8682 21.3001 11.8682 22.3444C11.8682 23.3887 12.7148 24.2353 13.7592 24.2353Z"
        fill="#FFF4D1"
      />
      <Path
        d="M18.5994 18.6498C18.5994 19.0088 18.3084 19.2998 17.9494 19.2998C17.5904 19.2998 17.2994 19.0088 17.2994 18.6498C17.2994 18.2909 17.5904 17.9998 17.9494 17.9998C18.3084 17.9998 18.5994 18.2909 18.5994 18.6498Z"
        fill="#FFF4D1"
      />
    </Svg>
  );
};

export default Cheese;

const styles = StyleSheet.create({});
