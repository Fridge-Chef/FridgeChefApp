import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReviewPointContainer from './ReviewPointContainer';

type TotalPointProps = {
  point: number;
};

const TotalPoint = ({point}: TotalPointProps) => {
  return (
    <>
      {Array.from({length: point}).map((_, index) => (
        <ReviewPointContainer key={index} />
      ))}
    </>
  );
};

export default TotalPoint;

const styles = StyleSheet.create({});
