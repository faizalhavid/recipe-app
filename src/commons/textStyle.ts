import { useFonts } from 'expo-font';

export const AppTextStyle = {
  /* Headline */
  Heading: (color: string | undefined, fontSize?: number) => ({
    fontFamily: 'Popins-ExtraBold',
    fontSize: fontSize || 28,
    lineHeight: 48,

    color: color || 'black',
  }),
  h1: (color: string | undefined, fontSize?: number) => ({
    fontFamily: 'Popins-Bold',
    fontSize: fontSize || 24,
    lineHeight: 36,

    color: color || 'black',
  }),
  h2: (color: string | undefined, fontSize?: number) => ({
    fontFamily: 'Popins-Bold',
    fontSize: fontSize || 20,
    lineHeight: 32,
    color: color || 'black',
  }),
  h3: (color: string | undefined, fontSize?: number) => ({
    fontFamily: 'Popins-Bold',
    fontSize: fontSize || 16,
    lineHeight: 24,

    color: color || 'black',
  }),
  h4: (color: string | undefined, fontSize?: number) => ({
    fontFamily: 'Popins-SemiBold',
    fontSize: fontSize || 14,
    color: color || 'black',
  }),
  h5: (color: string | undefined, fontSize?: number) => ({
    fontFamily: 'Popins-Medium',
    fontSize: fontSize || 12,
    color: color || 'black',
  }),
  /* Body */
  Body: (color: string | undefined, fontSize?: number) => ({
    fontFamily: 'Popins-Regular',
    fontSize: fontSize || 16,
    color: color || 'black',
  }),
  p: (color: string | undefined, fontSize?: number) => ({
    fontFamily: 'Popins-Regular',
    fontSize: fontSize || 14,
    color: color || 'black',
  }),
};
