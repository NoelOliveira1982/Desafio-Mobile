/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Description from './src/views/Description';
import Login from './src/views/Login';
import User from './src/views/User';

AppRegistry.registerComponent(appName, () => Description);
