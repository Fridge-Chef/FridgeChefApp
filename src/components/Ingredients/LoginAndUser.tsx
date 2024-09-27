import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../globalStyle';
import LoginIcon from '../../utils/Svg/LoginIcon';
import Notification from '../../utils/Svg/Notification';
import FText from '../elements/FText';

const LoginAndUser = () => {
  const [test] = useState(true);
  return (
    <View style={styles.container}>
      {!test ? (
        <View style={styles.alignCenter}>
          <LoginIcon test={test} />
          <FText
            mLeft={FWidth * 8}
            fStyle="M_16"
            text="로그인 하기"
            color={colors.text}
          />
        </View>
      ) : (
        <View style={styles.userContainer}>
          <View style={styles.alignCenter}>
            <LoginIcon test={test} />
            <View style={styles.alignCenter}>
              <FText
                mLeft={FWidth * 8}
                fStyle="B_16"
                text="김민영"
                color={colors.text}
              />
              <FText fStyle="M_16" color={colors.text} text="님의 냉장고" />
            </View>
          </View>
          <Notification />
        </View>
      )}
    </View>
  );
};

export default LoginAndUser;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: FWidth * 20,
    paddingRight: FWidth * 14,
    paddingVertical: FWidth * 14,
    height: FWidth * 52,
    backgroundColor: colors.background3,
  },

  alignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
