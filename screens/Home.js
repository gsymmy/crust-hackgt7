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

export default class Home extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
				<View style={styles.container}>
					<View style={styles.header}>
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<Image style={{ width: 50, height: 30 }} source={require('../media/ncr.png')} />
						</View>
						<View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
							<Image style={{ width: 100, height: 40 }} source={require('../media/logo.png')} />
						</View>
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<Image style={{ width: 40, height: 40 }} source={require('../media/default.png')} />
						</View>
					</View>
					<View style={styles.body}>
						<View style={{ padding: 15 }}>
							<Text style={{ fontSize: 30 }}>Hello, Gursimran!</Text>
						</View>
						<View style={{ alignItems: 'center' }}>
							<View style={styles.infocard}>
								<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
									<Image
										style={{
											width: 170,
											height: 170,
											borderRadius: 150,
											borderWidth: 10,
											borderColor: 'white',
											marginBottom: 5
										}}
										source={require('../media/profile.jpg')}
									/>
									<Text style={{ color: 'white' }}>Face ID enabled</Text>
								</View>
								<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
									<View style={{ marginBottom: 20 }}>
										<Text style={{ color: 'white', fontSize: 20 }}>Your Location</Text>
										<Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
											848 Spring St NW
										</Text>
									</View>
									<View>
										<Text style={{ color: 'white', fontSize: 20 }}>Your Loyalty Points</Text>
										<Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>428</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.footer}>
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<TouchableOpacity>
								<Image style={{ width: 28, height: 28 }} source={require('../media/home.png')} />
							</TouchableOpacity>
						</View>
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<TouchableOpacity>
								<Image style={{ width: 30, height: 25 }} source={require('../media/orders.png')} />
							</TouchableOpacity>
						</View>
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<TouchableOpacity>
								<Image style={{ width: 25, height: 30 }} source={require('../media/card.png')} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EFEFF4',
		alignItems: 'center',
		justifyContent: 'center'
	},
	header: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#FFFFFF',
		opacity: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	body: {
		flex: 10,
		backgroundColor: '#rgba(255,255,255,0.1)',
		width: '100%'
	},
	infocard: {
		backgroundColor: '#F0681E',
		width: 400,
		height: 220,
		borderRadius: 10,
		flexDirection: 'row'
	},
	footer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#FFFFFF',
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
