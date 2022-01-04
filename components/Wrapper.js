import React from 'react';
import { View, ScrollView } from 'native-base';

// components
import Header from '../screens/Header';

import { childrenStyle } from '../common/style';

const Wrapper = ({
  children,

  navigation,
  logo,
  title,
  backIcon,

  header,
}) => {
  return (
    <>
      {header && (
        <Header
          navigation={navigation && navigation}
          logo={logo && logo}
          title={title && title}
          backIcon={backIcon && backIcon}
        />
      )}

      <View mb={10}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={childrenStyle.children}
          alwaysBounceVertical={false}
          overScrollMode='never'
        >
          {children}
        </ScrollView>
      </View>
    </>
  );
};

export default Wrapper;

// const styles = StyleSheet.create({
//   child: {
//     height: height - 128,
//   },
// });

Wrapper.defaultProps = {
  header: true,
  footer: true,
};
