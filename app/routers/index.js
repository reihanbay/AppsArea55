import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack,SplashScreenStack,MenuStack,ContactStack ,AboutStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    Splash:SplashScreenStack,
    OnBoarding: OnBoardingStack,
    Menu:MenuStack,
    Contact: ContactStack,
    About: AboutStack,
    App: Drawer
  },
  {
    initialRouteName: 'About'
  }
);
