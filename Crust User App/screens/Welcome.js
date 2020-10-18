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

export default class Welcome extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					style={{ flex: 1, width: '100%', height: '100%' }}
					source={require('../media/canvas.jpg')}
				>
					<View style={styles.header}>
						<Image style={{ width: 180, height: 100 }} source={require('../media/logo.png')} />
						<Image style={{ width: 100, height: 28 }} source={require('../media/ncr_full.png')} />
					</View>
					<View style={styles.body} />
					<View style={styles.footer}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
							<View style={styles.login}>
								<Text style={{ color: 'white', fontSize: 18 }}>Log In</Text>
							</View>
						</TouchableOpacity>
						<Button color="white" title="Not registered yet? Sign Up!" />
					</View>
				</ImageBackground>
			</View>
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
		flex: 2,
		backgroundColor: '#rgba(255,255,255,0.1)',
		opacity: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	body: {
		flex: 2,
		backgroundColor: '#rgba(255,255,255,0.1)',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	footer: {
		flex: 1,
		backgroundColor: '#rgba(255,255,255,0.1)',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	login: {
		backgroundColor: '#469F3D',
		width: 300,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		marginBottom: 10
	}
});
