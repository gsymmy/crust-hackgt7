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
	Keyboard,
	ScrollView
} from 'react-native';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

export default class Menu extends Component {
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
						<ScrollView style={{ width: screenWidth, padding: 10 }}>
							<View style={{ padding: 15 }}>
								<Text style={{ fontSize: 30 }}>Order Summary</Text>
							</View>
							<View style={{ alignItems: 'center' }}>
								<View style={styles.hr} />
								<View style={{ flexDirection: 'row', alignItems: 'center', width: 350, marginTop: 10 }}>
									<View style={styles.dishName}>
										<Text style={{ color: 'white', fontSize: '17' }}>Chicken Sandwich</Text>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<Text style={{ fontSize: 30, fontWeight: 'bold' }}>x 1</Text>
									</View>
								</View>
								<View style={{ flexDirection: 'row', alignItems: 'center', width: 350, marginTop: 10 }}>
									<View style={styles.dishName}>
										<Text style={{ color: 'white', fontSize: '17' }}>Mac & Cheese</Text>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<Text style={{ fontSize: 30, fontWeight: 'bold' }}>x 1</Text>
									</View>
								</View>
								<View
									style={{
										backgroundColor: '#469F3D',
										width: 200,
										height: 200,
										borderRadius: 250,
										marginTop: 25,
										alignItems: 'center',
										justifyContent: 'center'
									}}
								>
									<Image
										style={{
											width: 75,
											height: 60
										}}
										source={require('../media/curbside-inverted.png')}
									/>
								</View>
								<View style={{ marginTop: 20 }}>
									<Text style={{ fontWeight: 'bold' }}>Nearest Location</Text>
									<Text>350 Ferst Dr NW</Text>
								</View>
								<View style={{ marginTop: 20 }}>
									<Text style={{ fontWeight: 'bold' }}>Best Location</Text>
									<Text>350 Ferst Dr NW</Text>
								</View>
								<View style={{ justifyContent: 'flex-start', marginTop: 20 }}>
									<Text style={{ fontSize: 35, fontWeight: 'bold' }}>Total: $10.75</Text>
								</View>
								<View>
									<TouchableOpacity>
										<View style={styles.login}>
											<Text style={{ color: 'white', fontSize: 25 }}>Pay with NCR</Text>
										</View>
									</TouchableOpacity>
								</View>
							</View>
						</ScrollView>
					</View>
					<View style={styles.footer}>
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
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
		width: 390,
		height: 220,
		borderRadius: 10,
		flexDirection: 'row',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5
	},
	imHolder: {
		backgroundColor: 'white',
		width: 100,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 150
	},
	imHolderGreen: {
		backgroundColor: '#469F3D',
		width: 100,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 150
	},
	dishName: {
		flex: 6,
		backgroundColor: '#F0681E',
		height: 50,
		justifyContent: 'center',
		padding: 5,
		borderRadius: 10,
		alignItems: 'center'
	},
	hr: {
		borderBottomColor: 'black',
		borderBottomWidth: 1.4,
		width: 350,
		alignItems: 'center',
		marginTop: 2
	},
	heading: {
		flexDirection: 'row',
		backgroundColor: 'white',
		width: 350,
		marginTop: 15,
		height: 60,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5
	},
	item: {
		flexDirection: 'row',
		backgroundColor: 'white',
		width: 350,
		marginTop: 15,
		height: 60,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5
	},
	startOrder: {
		backgroundColor: '#469F3D',
		padding: 20,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5
	},
	rescard: {
		backgroundColor: '#EE586B',
		marginTop: 10,
		width: 390,
		height: 300,
		borderRadius: 10,
		paddingLeft: 10,
		paddingRight: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5
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
		marginTop: 15,
		backgroundColor: '#469F3D',
		width: 350,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		marginBottom: 10
	}
});
