import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const CustomButton = ({ title, color, onPress, transparent, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color,
      }}
      disabled={disabled}
    >
      <Text
        style={{
          fontFamily: 'SF_regular',
          color: 'white',
          fontSize: 16,
          textAlign: 'center',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  color: PropTypes.string,
};

CustomButton.defaultProps = {
  color: '#FF9900',
};
