import { StyleSheet, Platform } from 'react-native';
import { COLOR_WHITE, FONT_HEADLINE6_PRIMARY, COLOR_BASE_PRIMARY_MAIN } from '../../../styles';
import { scale } from '../../../utils/scaling';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLOR_WHITE,
    height: Platform.OS === 'ios' ? 44 : 56,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  centerContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  leftRightContainer: {
    flex: 1,
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
