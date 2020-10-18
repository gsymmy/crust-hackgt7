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
							<View style={{ alignItems: 'center' }}>
								<View style={{ flexDirection: 'row', marginTop: 15 }}>
									<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
										<TouchableOpacity>
											<View style={styles.imHolderGreen}>
												<Image
													style={{
														width: 50,
														height: 50
													}}
													source={require('../media/group-inverted.png')}
												/>
											</View>
										</TouchableOpacity>
										<Text style={{ marginTop: 2, color: 'black', fontSize: 15 }}>Group</Text>
									</View>
									<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
										<TouchableOpacity>
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
										<Text style={{ marginTop: 2, color: 'black', fontSize: 15 }}>Delivery</Text>
									</View>
									<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
										<TouchableOpacity>
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
										<Text style={{ marginTop: 2, color: 'black', fontSize: 15 }}>Curbside</Text>
									</View>
								</View>
								<View style={styles.hr} />
								<View style={styles.heading}>
									<View
										style={{ flex: 2, padding: 5, justifyContent: 'center', alignItems: 'center' }}
									>
										<Image
											style={{
												width: 40,
												height: 40
											}}
											source={require('../media/entrees.png')}
										/>
									</View>
									<View style={{ flex: 9, justifyContent: 'center' }}>
										<Text style={{ fontSize: 20 }}>Entrées</Text>
									</View>
								</View>
								<View style={{ flexDirection: 'row', alignItems: 'center', width: 350, marginTop: 10 }}>
									<View style={styles.dishName}>
										<Text style={{ color: 'white', fontSize: '17' }}>Chicken Sandwich</Text>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/AR.png')}
											/>
										</TouchableOpacity>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/add.png')}
											/>
										</TouchableOpacity>
									</View>
								</View>
								<View style={{ flexDirection: 'row', alignItems: 'center', width: 350, marginTop: 10 }}>
									<View style={styles.dishName}>
										<Text style={{ color: 'white', fontSize: '17' }}>Spicy Chicken Sandwich</Text>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/AR.png')}
											/>
										</TouchableOpacity>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/add.png')}
											/>
										</TouchableOpacity>
									</View>
								</View>
								<View style={{ flexDirection: 'row', alignItems: 'center', width: 350, marginTop: 10 }}>
									<View style={styles.dishName}>
										<Text style={{ color: 'white', fontSize: '17' }}>Chicken Nuggets</Text>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/AR.png')}
											/>
										</TouchableOpacity>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/add.png')}
											/>
										</TouchableOpacity>
									</View>
								</View>
								<View style={{ flexDirection: 'row', alignItems: 'center', width: 350, marginTop: 10 }}>
									<View style={styles.dishName}>
										<Text style={{ color: 'white', fontSize: '17' }}>Deluxe Sandwich</Text>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/AR.png')}
											/>
										</TouchableOpacity>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/add.png')}
											/>
										</TouchableOpacity>
									</View>
								</View>
								<View style={styles.heading}>
									<View
										style={{ flex: 2, padding: 5, justifyContent: 'center', alignItems: 'center' }}
									>
										<Image
											style={{
												width: 30,
												height: 40
											}}
											source={require('../media/sides.png')}
										/>
									</View>
									<View style={{ flex: 9, justifyContent: 'center' }}>
										<Text style={{ fontSize: 20 }}>Sides</Text>
									</View>
								</View>
								<View style={{ flexDirection: 'row', alignItems: 'center', width: 350, marginTop: 10 }}>
									<View style={styles.dishName}>
										<Text style={{ color: 'white', fontSize: '17' }}>Waffle Fries</Text>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/AR.png')}
											/>
										</TouchableOpacity>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/add.png')}
											/>
										</TouchableOpacity>
									</View>
								</View>
								<View style={{ flexDirection: 'row', alignItems: 'center', width: 350, marginTop: 10 }}>
									<View style={styles.dishName}>
										<Text style={{ color: 'white', fontSize: '17' }}>Cole Slaw</Text>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/AR.png')}
											/>
										</TouchableOpacity>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/add.png')}
											/>
										</TouchableOpacity>
									</View>
								</View>
								<View style={{ flexDirection: 'row', alignItems: 'center', width: 350, marginTop: 10 }}>
									<View style={styles.dishName}>
										<Text style={{ color: 'white', fontSize: '17' }}>Mac & Cheese</Text>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/AR.png')}
											/>
										</TouchableOpacity>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/add.png')}
											/>
										</TouchableOpacity>
									</View>
								</View>
								<View style={styles.heading}>
									<View
										style={{ flex: 2, padding: 5, justifyContent: 'center', alignItems: 'center' }}
									>
										<Image
											style={{
												width: 25,
												height: 40
											}}
											source={require('../media/drinks.png')}
										/>
									</View>
									<View style={{ flex: 9, justifyContent: 'center' }}>
										<Text style={{ fontSize: 20 }}>Beverages</Text>
									</View>
								</View>
								<View style={{ flexDirection: 'row', alignItems: 'center', width: 350, marginTop: 10 }}>
									<View style={styles.dishName}>
										<Text style={{ color: 'white', fontSize: '17' }}>Sweet Tea</Text>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/AR.png')}
											/>
										</TouchableOpacity>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/add.png')}
											/>
										</TouchableOpacity>
									</View>
								</View>
								<View style={{ flexDirection: 'row', alignItems: 'center', width: 350, marginTop: 10 }}>
									<View style={styles.dishName}>
										<Text style={{ color: 'white', fontSize: '17' }}>Lemonade</Text>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/AR.png')}
											/>
										</TouchableOpacity>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/add.png')}
											/>
										</TouchableOpacity>
									</View>
								</View>
								<View style={{ flexDirection: 'row', alignItems: 'center', width: 350, marginTop: 10 }}>
									<View style={styles.dishName}>
										<Text style={{ color: 'white', fontSize: '17' }}>Cold Brew</Text>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/AR.png')}
											/>
										</TouchableOpacity>
									</View>
									<View style={{ flex: 1, padding: 5 }}>
										<TouchableOpacity>
											<Image
												style={{
													width: 35,
													height: 35
												}}
												source={require('../media/add.png')}
											/>
										</TouchableOpacity>
									</View>
								</View>
								<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
									<View style={styles.login}>
										<Image
											style={{
												width: 35,
												height: 35
											}}
											source={require('../media/cart.png')}
										/>
									</View>
								</TouchableOpacity>
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
		marginTop: 25
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
