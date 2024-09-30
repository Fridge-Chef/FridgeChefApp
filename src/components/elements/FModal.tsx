import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FText from './FText';
import FButton from './FButton';

type FModalProps = {
  modalVisible: boolean;
  setVisible: (visible: boolean) => void;
  text: string;
  text2?: string;
  buttonText: string;
  cancel?: boolean;
};

const FModal = ({
  modalVisible = false,
  setVisible,
  text,
  text2,
  buttonText,
  cancel,
}: FModalProps) => {
  return (
    <Modal visible={modalVisible} transparent>
      <View style={styles.container}>
        <View style={styles.contentBox}>
          <FText fStyle="R_18" color={colors.black} text={text} />
          {text2 && <FText fStyle="R_18" color={colors.black} text={text2} />}
          <View style={styles.buttonContainer}>
            {cancel && (
              <FButton
                buttonStyle="modal"
                marginRight={FWidth * 12}
                buttonColor={colors.b100}
                onPress={() => {
                  setVisible(false);
                }}>
                <FText fStyle="B_16" color={colors.black} text={buttonText} />
              </FButton>
            )}
            <FButton
              buttonStyle="modal"
              buttonColor={colors.primary[1]}
              onPress={() => {
                setVisible(false);
              }}>
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
