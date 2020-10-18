import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	SafeAreaView,
	Image,
	ImageBackground,
	TouchableOpacity,
	AsyncStorage,
	Keyboard
} from 'react-native';

export default class Menu extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: '#43472C' }}>
				<View style={styles.container}>
					<ImageBackground
						style={{ flex: 1, width: '100%', height: '100%' }}
						source={require('../media/canvas.jpg')}
					>
						<View style={styles.header} />
						<View style={styles.body}>
							<Button color="#43472C" title="Login" />
						</View>
						<View style={styles.footer}>
							<Button color="#43472C" title="Not registered yet? Sign Up!" />
						</View>
					</ImageBackground>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#43472C',
		alignItems: 'center',
		justifyContent: 'center'
	},
	header: {
		flex: 3,
		backgroundColor: '#rgba(255,255,255,0.6)',
		opacity: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	body: {
		flex: 2,
		backgroundColor: '#rgba(255,255,255,0.6)',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	footer: {
		flex: 1,
		backgroundColor: '#rgba(255,255,255,0.6)',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	email: {
		backgroundColor: 'white',
		width: 250,
		padding: 10,
		borderColor: '#43472C',
		opacity: 0.9,
		borderWidth: 0.7,
		borderRadius: 10,
		marginBottom: 10
	},
	button: {
		backgroundColor: '#43472C',
		width: 100,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10
	}
});
