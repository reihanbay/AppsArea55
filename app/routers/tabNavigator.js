import React from 'react';
import { TabNavigator } from 'react-navigation';
import { MenuStack, ContactStack, AboutStack, WebStack } from './stackNavigator';
import TabBarBottom from '../components/elements/TabBarBottom';
import TabBarIcon from '../components/elements/TabBarIcon';
import Menu from '../../assets/svgs/Home';
import Web from '../../assets/svgs/Web';
import Contact from '../../assets/svgs/Contact';
import About from '../../assets/svgs/About';


const COLOR_DARK_GREY = '#797979';
const COLOR_RED = '#8C2D39';
const COLOR_GREY = '#bdbdbd';
const COLOR_WHITE = '#ffffff';

const createTab = ({ stack, label, image, iconStyle, badge }) => ({
  screen: stack,
  navigationOptions: ({ navigation }) => ({
    tabBarLabel: label,
    tabBarIcon: ({ tintColor }) => (
      <TabBarIcon
        isActive={tintColor === COLOR_RED}
        label={label}
        icon={tintColor === COLOR_RED ? image.active : image.inactive}
        iconStyle={[iconStyle, { height: 30, width: 30, tintColor }]}
        badge={badge}
        navigation={navigation}
      />
    )
  })
});

const navigatorConfig = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  backBehavior: true,
  lazy: true,
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    activeTintColor: COLOR_RED,
    inactiveTintColor: COLOR_GREY,
    style: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: -10
      },
      shadowOpacity: 1,
      shadowRadius: 10.00,
  
      elevation: 20,
      borderTopWidth: 0,
      justifyContent: 'space-between',
      backgroundColor: COLOR_WHITE,
      height: 60
    },
    labelStyle: {
      color: COLOR_DARK_GREY
    },
    tabStyle: {},
    indicatorStyle: {
      backgroundColor: COLOR_WHITE
    }
  }
};

const createTabNavigator = (tabDefinations = []) => {
  const tabs = tabDefinations.map(createTab);
  return new TabNavigator(tabs, navigatorConfig);
};

export const AppStack = createTabNavigator([
  {
    label: 'AR/VR',
    stack: MenuStack,
    image: {
      active: <Menu height={30} width={30} active />,
      inactive: <Menu height={25} width={25} />
    }
  },
  {
    label: 'Web',
    stack: WebStack,
    image: {
      active: <Web height={30} width={30} active />,
      inactive: <Web height={25} width={25} />
    }
  },
  {
    label: 'Contact',
    stack: ContactStack,
    image: {
      active: <Contact height={30} width={30} active />,
      inactive: <Contact height={25} width={25} />
    }
  },
  {
    label: 'About Us',
    stack: AboutStack,
    image: {
      active: <About height={30} width={30} active />,
      inactive: <About height={25} width={25} />
    },
  }
]);

export default { AppStack };
