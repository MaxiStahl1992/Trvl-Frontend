import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from 'react-native';

import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import MyTripsScreen from "../../screens/MyTripsScreen";
import MyLikesScreen from "../../screens/MyLikesScreen";
import ChatScreen from "../../screens/ChatScreen";
import { colors } from "../../../assets/styles/styles";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function TabNavigator() {
	return (
			<Tab.Navigator
				screenOptions={() => ({
					tabBarActiveTintColor: colors.blue,
					tabBarInactiveTintColor: colors.gray,
					tabBarStyle: {
						backgroundColor: colors.white,
						paddingTop: 5,
					},
					tabBarShowLabel: false,
				})}
			>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={() => ({
						headerShown: false,
						tabBarIcon: ({ color, focused }) => {
							const iconName = focused ? "home" : "home-outline";
							const iconSize = focused ? 26 : 24;

							return (
								<Ionicons
									name={iconName}
									size={iconSize}
									color={color}
								/>
							);
						},
					})}
				/>
				<Tab.Screen
					name="MyTrips"
					component={MyTripsScreen}
					options={() => ({
						headerShown: false,
						tabBarIcon: ({ color, focused }) => {
							const iconName = focused ? "navigate" : "navigate-outline";
							const iconSize = focused ? 26 : 24;

							return (
								<Ionicons
									name={iconName}
									size={iconSize}
									color={color}
								/>
							);
						},
					})}
				/>
				<Tab.Screen
					name="MyLikes"
					component={MyLikesScreen}
					options={() => ({
						headerShown: false,
						tabBarIcon: ({ color, focused }) => {
							const iconName = focused ? "heart" : "heart-outline";
							const iconSize = focused ? 26 : 24;

							return (
								<Ionicons
									name={iconName}
									size={iconSize}
									color={color}
								/>
							);
						},
					})}
				/>
				<Tab.Screen
					name="Chat"
					component={ChatScreen}
					options={() => ({
						headerShown: false,
						tabBarIcon: ({ color, focused }) => {
							const iconName = focused ? "chatbox" : "chatbox-outline";
							const iconSize = focused ? 26 : 24;

							return (
								<Ionicons
									name={iconName}
									size={iconSize}
									color={color}
								/>
							);
						},
					})}
				/>
				<Tab.Screen
					name="Profile"
					component={ProfileScreen}
					options={() => ({
						headerShown: false,
						tabBarIcon: ({ color, focused }) => {
							const iconName = focused ? "person" : "person-outline";
							const iconSize = focused ? 26 : 24;

							return (
								<Ionicons
									name={iconName}
									size={iconSize}
									color={color}
								/>
							);
						},
					})}
				/>
			</Tab.Navigator>
	);
}

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ contentStyle: { backgroundColor: colors.white } }}
			>
				<Stack.Screen
					name="Main"
					component={TabNavigator}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({

})

export default Navigation;
