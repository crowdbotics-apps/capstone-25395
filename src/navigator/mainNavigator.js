import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile220646Navigator from '../features/UserProfile220646/navigator';
import Maps220627Navigator from '../features/Maps220627/navigator';
import Settings220605Navigator from '../features/Settings220605/navigator';
import Settings220590Navigator from '../features/Settings220590/navigator';
import NotificationList220589Navigator from '../features/NotificationList220589/navigator';
import Maps220588Navigator from '../features/Maps220588/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile220646: { screen: UserProfile220646Navigator },
Maps220627: { screen: Maps220627Navigator },
Settings220605: { screen: Settings220605Navigator },
Settings220590: { screen: Settings220590Navigator },
NotificationList220589: { screen: NotificationList220589Navigator },
Maps220588: { screen: Maps220588Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
