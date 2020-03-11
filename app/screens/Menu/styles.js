import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals

  bodyLeftRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(-10)
  },
  bodyCenter: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  // blankPage: {
  //   // flex: 4,
  //   // flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginVertical: scale(150)
  // },
  // blankImg: {
  //   height: scale(162),
  //   width: scale(208)
  // },
  blankText: {
    marginTop: METRICS.doubleBaseMargin,
    marginBottom: METRICS.baseMargin,
    fontSize: 18,
    fontWeight: '300'
  },
  container: {
    backgroundColor: COLOR_WHITE,
    marginHorizontal: scale(40),
    marginVertical: METRICS.baseMargin
  },
  content: {
    backgroundColor: COLOR_WHITE
  },
  // card: {
  //   borderRadius: 10,
  //   height: scale(70)
  // },
  // text: {
  //   textAlign: 'left',
  //   fontSize: 12
  // },
  // // eslint-disable-next-line react-native/no-color-literals
  // text1: {
  //   textAlign: 'left',
  //   fontSize: 10
  // },
  // text2: {
  //   color: COLOR_BASE_PINK_LIGHT,
  //   fontSize: 11,
  //   fontWeight: 'bold'
  // },

  // mar: {
  //   paddingVertical: 10
  // }
});

export default styles;
