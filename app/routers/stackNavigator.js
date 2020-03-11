import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import About from '../screens/About';
import Menu from '../screens/Menu';
import Web from '../screens/Web';
import Splash from '../screens/Splashscreen';
import UploadPhoto from '../screens/UploadPhoto';
import History from '../screens/History';
import Account from '../screens/Account';
import OnBoarding from '../screens/OnBoarding';

export const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: true
      }
    }
    
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);


export const SplashScreenStack = StackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none',navigationOptions: {tabBarVisible: false}}
);
export const MenuStack = StackNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none',navigationOptions: {tabBarVisible: false}}
);
export const WebStack = StackNavigator(
  {
    Web: {
      screen: Web,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none',navigationOptions: {tabBarVisible: false}}
);
export const ContactStack = StackNavigator(
  {
    Contact: {
      screen: Contact,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none',navigationOptions: {tabBarVisible: false}}
);
export const AboutStack = StackNavigator(
  {
    About: {
      screen: About,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none',navigationOptions: {tabBarVisible: false}}
);
// export const SearchStack = StackNavigator(
//   {
//     Search: {
//       screen: Search,
//       navigationOptions: {
//         tabBarVisible: true
//       }
//     }
//   },
//   { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
// );

export const UploadPhotoStack = StackNavigator(
  {
    UploadPhoto: {
      screen: UploadPhoto,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const HistoryStack = StackNavigator(
  {
    History: {
      screen: History,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const AccountStack = StackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const OnBoardingStack = StackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
