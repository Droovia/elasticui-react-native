import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;

const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor: number) =>
  size + (scale(size) - size) * factor;

const moderateVerticalScale = (size: number, factor: number) =>
  size + (verticalScale(size) - size) * factor;

// code copied from https://github.com/nirsky/react-native-size-matters/blob/master/lib/extend/scaling-utils.extend.js

export default {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
};
