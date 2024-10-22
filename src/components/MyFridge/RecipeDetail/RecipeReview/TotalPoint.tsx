import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReviewPointContainer from './ReviewPointContainer';

type TotalPointProps = {
  point: number;
};

const TotalPoint = ({point}: TotalPointProps) => {
  const roundedPoint = Math.round(point);
  return (
    <>
      {Array.from({length: roundedPoint}).map((_, index) => (
        <ReviewPointContainer key={index} />
      ))}
    </>
  );
};

export default TotalPoint;

const styles = StyleSheet.create({});
