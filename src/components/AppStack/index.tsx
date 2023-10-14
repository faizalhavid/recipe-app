// export function HStack({}: HStackProps) {
//     return <StatusBar animated backgroundColor={color} barStyle={barStyle} showHideTransition="slide" hidden={false} />;
//   }

import { View } from 'native-base';
import Spacer from '../Spacer';
import React from 'react';

type AppStackProps = {
  children?: React.ReactNode;
  direction: 'row' | 'column';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  alignContent?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'space-between' | 'space-around' | undefined;
  paddingHorizontal?: number;
  paddingVertical?: number;
  spacing?: number;
};

export function AppStack({ children, direction, alignItems, justifyContent, alignContent, paddingHorizontal, paddingVertical, spacing }: AppStackProps) {
  const addSpacing = (child: React.ReactNode, index: number) => {
    if (index === children?.length - 1) {
      return child;
    }

    if (direction === 'row') {
      return (
        <React.Fragment key={index}>
          {child}
          <Spacer left={spacing} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={index}>
          {child}
          <Spacer top={spacing} />
        </React.Fragment>
      );
    }
  };
  return <View style={{ flexDirection: direction, alignItems: alignItems, justifyContent: justifyContent, alignContent: alignContent, paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical }}>{React.Children.map(children, (child, index) => addSpacing(child, index))}</View>;
}
