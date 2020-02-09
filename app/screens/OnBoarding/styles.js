import { StyleSheet } from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_GREY_DARK } from '../../styles';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    color: COLOR_BASE_PRIMARY_MAIN,
    fontFamily: 'Avenir',
    fontSize: 24,
    fontWeight: '300',
    marginVertical: 15
  },
  text: {
    color: COLOR_GREY_DARK,
    fontFamily: 'Avenir',
    fontSize: 12,
    marginHorizontal: 40,
    textAlign: 'center'
  },
  pic: {
    // paddingHorizontal: scale(40),
    height: scale(230),
    width: scale(280),
    resizeMode: 'contain'
  }
});

export default styles;
