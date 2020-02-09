import { StyleSheet, Platform } from 'react-native';
import { COLOR_WHITE, FONT_HEADLINE6_PRIMARY, COLOR_BASE_PRIMARY_MAIN } from '../../../styles';
import { scale } from '../../../utils/scaling';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 79 : 80
  },
  centerContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    borderBottomWidth: 2,
    borderBottomColor: COLOR_BASE_PRIMARY_MAIN
  },
  leftRightContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title1: {
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_BASE_PRIMARY_MAIN,
    marginBottom: -8,
    fontSize: 18
  },
  title2: {
    ...FONT_HEADLINE6_PRIMARY,
    color: 'black',
    fontSize: 17
  }
});
