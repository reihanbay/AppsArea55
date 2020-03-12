import { StyleSheet,Dimensions } from 'react-native';
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
  blankText: {
    marginTop: METRICS.doubleBaseMargin,
    marginBottom: METRICS.baseMargin,
    fontSize: 18,
    fontWeight: '300'
  },
  container: {
    width: '100%',
    height: scale(540),
    resizeMode: 'contain'
  },
  web: {
    width: '100%',
    height: scale(540),
    resizeMode: 'contain'
  },
  content: {
    backgroundColor: COLOR_WHITE
  }
});

export default styles;
