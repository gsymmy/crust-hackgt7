import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import Menu from './screens/Menu';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Welcome"
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Welcome" component={Welcome} />
				<Stack.Screen name="Menu" component={Menu} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default App;
