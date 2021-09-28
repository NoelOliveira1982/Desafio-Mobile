import { createAppContainer, createSwitchNavigator } from 'react-navigation';


//import Views
import Description from "./views/Description";
import Login from "./views/Login";
import User from "./views/User";
import Admin from './views/Admin';

const MainRoutes = {
    Login: {
        name: 'Login',
        screen: Login
    },
    Home: {
        name: 'Home',
        screen: User
    },
    Description: {
        name: 'Description',
        screen: Description
    },
    Admin: {
        name: 'Admin',
        screen: Admin
    }
}

const MainNavigator = createSwitchNavigator(MainRoutes, {
    initialRouteName: 'Login'
})

export default createAppContainer(MainNavigator);