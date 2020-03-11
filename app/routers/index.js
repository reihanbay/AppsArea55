import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack,SplashScreenStack,MenuStack,ContactStack ,AboutStack, WebStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    Splash:SplashScreenStack,
    OnBoarding: OnBoardingStack,
    Menu:MenuStack,
    Contact: ContactStack,
    Web: WebStack,
    About: AboutStack,
    App: Drawer
  },
  {
    initialRouteName: 'App'
  }
);
