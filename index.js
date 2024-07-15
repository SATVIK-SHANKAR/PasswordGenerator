/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import App from './AppMain';
import { name as appName } from './app.json';
import AppMain from './AppMain';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => AppMain);
