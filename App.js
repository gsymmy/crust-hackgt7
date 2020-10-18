import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import Menu from './screens/Menu';
import MenuCurbside from './screens/MenuCurbside';
import Summary from './screens/Summary';
import SummaryCurbside from './screens/SummaryCurbside';

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
				<Stack.Screen name="SummaryCurbside" component={SummaryCurbside} />
				<Stack.Screen name="Summary" component={Summary} />
				<Stack.Screen name="Welcome" component={Welcome} />
				<Stack.Screen name="Menu" component={Menu} />
				<Stack.Screen name="MenuCurbside" component={MenuCurbside} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default App;
