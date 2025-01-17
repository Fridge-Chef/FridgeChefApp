import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import FButton from './FButton';
import FText from './FText';

type FModalProps = {
  modalVisible: boolean;
  text: string;
  text2?: string | null;
  buttonText: string;
  cancelText?: string;
  cancel?: boolean;
  onPress: () => void;
  cancelOnPress?: () => void;
};

const FModal = ({
  modalVisible = false,
  text,
  text2,
  buttonText,
  cancelText,
  cancel,
  onPress,
  cancelOnPress,
}: FModalProps) => {
  return (
    <Modal visible={modalVisible} transparent>
      <View style={styles.container}>
        <View style={styles.contentBox}>
          <FText fStyle={'M_16'} color={colors.text} text={text} />
          {text2 && <FText fStyle="M_16" color={colors.text} text={text2} />}
          <View style={styles.buttonContainer}>
            {cancel && (
              <FButton
                buttonStyle="modal"
                marginRight={FWidth * 12}
                buttonColor={colors.b100}
                onPress={cancelOnPress}>
                <FText fStyle="M_16" color={colors.black} text={cancelText} />
              </FButton>
            )}
            <FButton
              buttonStyle="modal"
              buttonColor={colors.primary[1]}
              onPress={onPress}>
              <FText fStyle="B_16" color={colors.white} text={buttonText} />
            </FButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  contentBox: {
    marginHorizontal: FWidth * 46,
    paddingTop: FWidth * 32,
    paddingHorizontal: FWidth * 24,
    paddingBottom: FWidth * 24,
    backgroundColor: colors.white,
    borderRadius: 16,
    alignItems: 'center',
  },

  buttonContainer: {
    marginTop: FWidth * 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
