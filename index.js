/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/Details';
import {name as appName} from './app.json';
import App2 from './src/Home';
import Home from './src/Home';
import App3 from './src/App3';

AppRegistry.registerComponent(appName, () => App3);
