import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FButton from '../components/elements/FButton';
import {FHeight, FWidth} from '../../globalStyle';

const Ingredients = () => {
  const ingredients = [
    {id: 1, name: '소금류'},
    {id: 2, name: '설탕류'},
    {id: 3, name: '간장류'},
    {id: 4, name: '고추장'},
    {id: 5, name: '식용유 종류'},
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: 'Pretendard-Bold',
            fontSize: 22,
            lineHeight: FHeight * 30,
            color: 'black',
          }}>{`냉장고 재료들을\n등록해주세요`}</Text>
        <View>
          <FButton buttonStyle="iconButton" buttonColor="black">
            <Icon name="add-outline" size={16} color="white" />
            <Text
              style={{
                color: 'white',
                fontFamily: 'Pretendard-Bold',
                marginLeft: FWidth * 6,
              }}>
              재료 추가
            </Text>
          </FButton>
        </View>
      </View>
      <View style={{marginTop: FHeight * 30}}>
        <FButton buttonStyle="iconText">
          <Text style={{fontFamily: 'Pretendard-Bold', color: '#545559'}}>
            조미료들
          </Text>
          <View
            style={{
              width: FWidth * 18,
              height: FWidth * 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 2,
            }}>
            <Icon name="chevron-down-outline" size={16} color="#545559" />
          </View>
        </FButton>
      </View>
      <View
        style={{
          marginTop: FHeight * 14,
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        {ingredients.map(item => (
          <View
            key={item.id}
            style={{marginRight: FHeight * 8, marginBottom: FHeight * 10}}>
            <FButton
              buttonStyle="iconButton"
              borderWidth={1}
              buttonColor="gray"
              radius={50}>
              <Text style={{fontFamily: 'Pretendard-Medium', color: 'black'}}>
                {item.name}
              </Text>
              <View
                style={{
                  width: FWidth * 15,
                  height: FWidth * 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: FWidth * 2,
                }}>
                <Icon name="close-outline" size={16} />
              </View>
            </FButton>
          </View>
        ))}
        <FButton
          buttonStyle="iconButton"
          buttonColor="white"
          borderWidth={1}
          radius={50}>
          <Icon name="add-outline" size={16} />
          <Text style={{marginLeft: FWidth * 6, color: '#545559'}}>
            조미료 추가
          </Text>
        </FButton>
      </View>
      <View style={{marginTop: FHeight * 30}}>
        <View>
          <FButton buttonStyle="iconText">
            <Text style={{fontFamily: 'Pretendard-Bold', color: '#545559'}}>
              별점 높은순
            </Text>
            <View
              style={{
                width: FWidth * 18,
                height: FWidth * 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 2,
              }}>
              <Icon name="chevron-down-outline" size={16} color="#545559" />
            </View>
          </FButton>
        </View>
        <View style={{marginTop: FHeight * 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 16,
              paddingVertical: 12,
              paddingRight: 12,
              borderWidth: 1,
              borderRadius: 50,
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="star" size={16} color="#FFC107" />
              <Text style={{marginLeft: 8}}>라면</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginRight: 8}}>유통기한 등록</Text>
              <View
                style={{
                  width: FWidth * 20,
                  height: FWidth * 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="close-outline" size={20} color="black" />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 16,
              paddingVertical: 12,
              paddingRight: 12,
              borderWidth: 1,
              borderRadius: 50,
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="star" size={16} color="#FFC107" />
              <Text style={{marginLeft: 8}}>라면</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginRight: 8}}>유통기한 등록</Text>
              <View
                style={{
                  width: FWidth * 20,
                  height: FWidth * 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="close-outline" size={20} color="black" />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 16,
              paddingVertical: 12,
              paddingRight: 12,
              borderWidth: 1,
              borderRadius: 50,
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="star" size={16} color="#FFC107" />
              <Text style={{marginLeft: 8}}>라면</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginRight: 8}}>유통기한 등록</Text>
              <View
                style={{
                  width: FWidth * 20,
                  height: FWidth * 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="close-outline" size={20} color="black" />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 16,
              paddingVertical: 12,
              paddingRight: 12,
              borderWidth: 1,
              borderRadius: 50,
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="star" size={16} color="#FFC107" />
              <Text style={{marginLeft: 8}}>라면</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginRight: 8}}>유통기한 등록</Text>
              <View
                style={{
                  width: FWidth * 20,
                  height: FWidth * 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="close-outline" size={20} color="black" />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 16,
              paddingVertical: 12,
              paddingRight: 12,
              borderWidth: 1,
              borderRadius: 50,
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="star" size={16} color="#FFC107" />
              <Text style={{marginLeft: 8}}>라면</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginRight: 8}}>유통기한 등록</Text>
              <View
                style={{
                  width: FWidth * 20,
                  height: FWidth * 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="close-outline" size={20} color="black" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Ingredients;

const styles = StyleSheet.create({
  container: {
    marginTop: FHeight * 16,
    paddingHorizontal: FWidth * 27,
    backgroundColor: 'white',
  },
});
