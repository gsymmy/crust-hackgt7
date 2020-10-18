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
						<ScrollView style={{ width: screenWidth, padding: 10 }}>
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
											<Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
												428
											</Text>
										</View>
									</View>
								</View>
								<View style={styles.rescard}>
									<View style={{ flexDirection: 'row', marginTop: 15 }}>
										<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
											<View style={{ marginBottom: 20 }}>
												<Text style={{ color: 'white', fontSize: 20 }}>Chick Fil A</Text>
												<Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
													350 Ferst Dr NW
												</Text>
											</View>
											<View style={{ backgroundColor: '#469F3D', padding: 5, borderRadius: 10 }}>
												<Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
													OPEN NOW
												</Text>
											</View>
										</View>
										<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
											<Image
												style={{
													width: 120,
													height: 120,
													borderRadius: 150,
													borderWidth: 10,
													borderColor: 'white',
													marginBottom: 5
												}}
												source={require('../media/header.jpg')}
											/>
										</View>
									</View>
									<View style={{ flexDirection: 'row', marginTop: 15 }}>
										<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
											<TouchableOpacity>
												<View style={styles.imHolder}>
													<Image
														style={{
															width: 50,
															height: 50
														}}
														source={require('../media/group.png')}
													/>
												</View>
											</TouchableOpacity>
											<Text style={{ marginTop: 2, color: 'white', fontSize: 15 }}>Group</Text>
										</View>
										<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
											<TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
												<View style={styles.imHolder}>
													<Image
														style={{
															width: 20,
															height: 50
														}}
														source={require('../media/delivery.png')}
													/>
												</View>
											</TouchableOpacity>
											<Text style={{ marginTop: 2, color: 'white', fontSize: 15 }}>Delivery</Text>
										</View>
										<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
											<TouchableOpacity
												onPress={() => this.props.navigation.navigate('MenuCurbside')}
											>
												<View style={styles.imHolder}>
													<Image
														style={{
															width: 50,
															height: 40
														}}
														source={require('../media/curbside.png')}
													/>
												</View>
											</TouchableOpacity>
											<Text style={{ marginTop: 2, color: 'white', fontSize: 15 }}>Curbside</Text>
										</View>
									</View>
								</View>
								<View style={styles.tacocard}>
									<View style={{ flexDirection: 'row', marginTop: 15 }}>
										<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
											<View style={{ marginBottom: 20 }}>
												<Text style={{ color: 'white', fontSize: 20 }}>Domino's Pizza</Text>
												<Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
													461 Ponce De Leon
												</Text>
											</View>
											<View style={{ backgroundColor: '#469F3D', padding: 5, borderRadius: 10 }}>
												<Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
													OPEN NOW
												</Text>
											</View>
										</View>
										<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
											<Image
												style={{
													width: 120,
													height: 120,
													borderRadius: 150,
													borderWidth: 10,
													borderColor: 'white',
													marginBottom: 5
												}}
												source={require('../media/dominos.jpg')}
											/>
										</View>
									</View>
									<View style={{ flexDirection: 'row', marginTop: 15 }}>
										<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
											<View style={styles.imHolder}>
												<Image
													style={{
														width: 50,
														height: 50
													}}
													source={require('../media/group.png')}
												/>
											</View>
											<Text style={{ marginTop: 2, color: 'white', fontSize: 15 }}>Group</Text>
										</View>
										<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
											<View style={styles.imHolder}>
												<Image
													style={{
														width: 20,
														height: 50
													}}
													source={require('../media/delivery.png')}
												/>
											</View>
											<Text style={{ marginTop: 2, color: 'white', fontSize: 15 }}>Delivery</Text>
										</View>
										<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
											<View style={styles.imHolder}>
												<Image
													style={{
														width: 50,
														height: 40
													}}
													source={require('../media/curbside.png')}
												/>
											</View>
											<Text style={{ marginTop: 2, color: 'white', fontSize: 15 }}>Curbside</Text>
										</View>
									</View>
								</View>
								<View style={styles.papacard}>
									<View style={{ flexDirection: 'row', marginTop: 15 }}>
										<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
											<View style={{ marginBottom: 20 }}>
												<Text style={{ color: 'white', fontSize: 20 }}>Taco Bell</Text>
												<Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
													930 Spring St NW
												</Text>
											</View>
											<View style={{ backgroundColor: '#469F3D', padding: 5, borderRadius: 10 }}>
												<Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
													OPEN NOW
												</Text>
											</View>
										</View>
										<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
											<Image
												style={{
													width: 120,
													height: 120,
													borderRadius: 150,
													borderWidth: 10,
													borderColor: 'white',
													marginBottom: 5
												}}
												source={require('../media/tacobell.jpg')}
											/>
										</View>
									</View>
									<View style={{ flexDirection: 'row', marginTop: 15 }}>
										<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
											<View style={styles.imHolder}>
												<Image
													style={{
														width: 50,
														height: 50
													}}
													source={require('../media/group.png')}
												/>
											</View>
											<Text style={{ marginTop: 2, color: 'white', fontSize: 15 }}>Group</Text>
										</View>
										<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
											<View style={styles.imHolder}>
												<Image
													style={{
														width: 20,
														height: 50
													}}
													source={require('../media/delivery.png')}
												/>
											</View>
											<Text style={{ marginTop: 2, color: 'white', fontSize: 15 }}>Delivery</Text>
										</View>
										<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
											<View style={styles.imHolder}>
												<Image
													style={{
														width: 50,
														height: 40
													}}
													source={require('../media/curbside.png')}
												/>
											</View>
											<Text style={{ marginTop: 2, color: 'white', fontSize: 15 }}>Curbside</Text>
										</View>
									</View>
								</View>
							</View>
						</ScrollView>
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
	tacocard: {
		backgroundColor: '#008FB2',
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
	papacard: {
		backgroundColor: '#A35DD7',
		marginTop: 10,
		marginBottom: 20,
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
	}
});
