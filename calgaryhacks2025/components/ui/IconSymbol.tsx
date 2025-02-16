// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image } from 'react-native';




// Import PNG icons
const ICONS = {
  'user.fill': require('@/assets/images/user.png'),
  'compass.fill': require('@/assets/images/Compass.png'),
  'world.fill': require('@/assets/images/World.png'),
  'cart.fill': require('@/assets/images/Cart.png'),
} as const;

export type IconSymbolName = keyof typeof ICONS;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color?: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
}) {
  const iconSource = ICONS[name];

  if (iconSource) {
    return <Image source={iconSource} style={{ width: size, height: size, resizeMode: 'contain' }} />;
  }

  return <MaterialIcons name={name as any} size={size} color={color} style={style} />;
}



// Add your SFSymbol to MaterialIcons mappings here.
// const MAPPING = {
//   // See MaterialIcons here: https://icons.expo.fyi
//   // See SF Symbols in the SF Symbols app on Mac.
//   'house.fill': 'home',
//   'paperplane.fill': 'send',
//   'chevron.left.forwardslash.chevron.right': 'code',
//   'chevron.right': 'chevron-right',
// } as Partial<
//   Record<
//     import('expo-symbols').SymbolViewProps['name'],
//     React.ComponentProps<typeof MaterialIcons>['name']
//   >
// >;

// export type IconSymbolName = keyof typeof MAPPING;

// /**
//  * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
//  *
//  * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
//  */
// export function IconSymbol({
//   name,
//   size = 24,
//   color,
//   style,
// }: {
//   name: IconSymbolName;
//   size?: number;
//   color: string | OpaqueColorValue;
//   style?: StyleProp<ViewStyle>;
//   weight?: SymbolWeight;
// }) {
//   return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
// }
