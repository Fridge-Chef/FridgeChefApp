import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../globalStyle';
import LoginIcon from '../../utils/Svg/LoginIcon';
import Notification from '../../utils/Svg/Notification';

const LoginAndUser = () => {
  const [test] = useState(true);
  return (
    <View style={styles.container}>
      {!test ? (
        <View style={styles.alignCenter}>
          <LoginIcon test={test} />
          <Text style={[fontStyles.M_16, styles.textColor]}>로그인 하기</Text>
        </View>
      ) : (
        <View style={styles.userContainer}>
          <View style={styles.alignCenter}>
            <LoginIcon test={test} />
            <View style={styles.alignCenter}>
              <Text style={[fontStyles.B_16, styles.textColor]}>김민영</Text>
              <Text
                style={[fontStyles.M_16, styles.textColor, {marginLeft: 0}]}>
                님의 냉장고
              </Text>
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

  textColor: {
    color: colors.text,
    marginLeft: FWidth * 8,
  },
});
