import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="MyTrips"
				component={MyTripsScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="MyLikes"
				component={MyLikesScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Chat"
				component={ChatScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{ headerShown: false }}
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

export default Navigation;
