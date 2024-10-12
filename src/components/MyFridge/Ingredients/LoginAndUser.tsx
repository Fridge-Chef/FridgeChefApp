import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import Notification from '../../../utils/Svg/Notification';
import FText from '../../elements/FText';
import NotLoginUser from '../../../utils/Svg/NotLoginUser';

type LoginAndUserProps = {
  test: boolean;
  styTest: (test: boolean) => void;
};

const LoginAndUser = ({test, styTest}: LoginAndUserProps) => {
  return (
    <TouchableOpacity onPress={() => styTest(!test)}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: !test ? colors.background3 : colors.primary[4],
          },
        ]}>
        {!test ? (
          <View style={styles.alignCenter}>
            <NotLoginUser />
            <FText
              mLeft={FWidth * 8}
              fStyle="B_16"
              text="로그인"
              color={colors.text}
            />
            <FText fStyle="R_16" text="이 필요해요." color={colors.text} />
          </View>
        ) : (
          <View style={styles.userContainer}>
            <View style={styles.alignCenter}>
              <NotLoginUser />
              <View style={styles.alignCenter}>
                <FText
                  mLeft={FWidth * 8}
                  fStyle="B_16"
                  text="김민영"
                  color={colors.text}
                />
                <FText
                  fStyle="M_16"
                  color={colors.text}
                  text="님의 냉장고입니다."
                />
              </View>
            </View>
            <Notification />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default LoginAndUser;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: FWidth * 22,
    paddingVertical: FWidth * 12,
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
