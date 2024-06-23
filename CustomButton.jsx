import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({ 
  btnKind = 'rounded', 
  variant = 'primary', 
  size = 'md', 
  iconOnly = false, 
  iconName = 'home', 
  title = '', 
  navigateTo = '', 
  onPress 
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (navigateTo) {
      navigation.navigate(navigateTo);
    }
    if (onPress) {
      onPress();
    }
  };

  const getButtonStyle = () => {
    let style = [styles.buttonBase];
    style.push(styles[btnKind]);
    style.push(styles[variant]);
    style.push(styles[size]);
    return style;
  };

  return (
    <TouchableOpacity style={getButtonStyle()} onPress={handlePress}>
      {iconOnly ? (
        <MaterialIcons name={iconName} size={24} color="white" />
      ) : (
        <View style={styles.content}>
          {iconName && <MaterialIcons name={iconName} size={24} color="white" style={styles.icon} />}
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    flexDirection: 'row',
  },
  rounded: {
    borderRadius: 25,
  },
  outlined: {
    borderWidth: 1,
    borderColor: '#3498db',
    backgroundColor: 'transparent',
  },
  primary: {
    backgroundColor: '#3498db',
  },
  secondary: {
    backgroundColor: '#2ecc71',
  },
  sm: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  md: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  lg: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  }
});

export default CustomButton;
