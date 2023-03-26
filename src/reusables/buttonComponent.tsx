import React, {ReactElement, ReactNode} from 'react';
import {StyleSheet, Text, View, TextProps, ButtonProps, TouchableOpacity, StyleProp, ViewStyle, TouchableNativeFeedbackProps, TouchableOpacityProps, TextStyle} from 'react-native';
import {colors, fontStyles} from '../utils/appStyles';
import TextComponent from './textComponent';

type ButtonCommonProps = TouchableNativeFeedbackProps & TouchableOpacityProps

interface ButtonComponentProps extends ButtonCommonProps {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle> 
  textStyle?: StyleProp<TextStyle>
} ;

const ButtonComponent = ({
  children,
  containerStyle,
  textStyle,
  ...props
}: ButtonComponentProps): ReactElement => {

  return (
    <TouchableOpacity activeOpacity={0.7} {...props} style={[containerStyle,styles.wrapperComponent]}>
        <TextComponent style={[{color: colors.whiteColor}, textStyle]} weight="bold">{children}</TextComponent>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  wrapperComponent: {
    height: 45,
    backgroundColor: colors.primaryColor,
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 20
  },
});
