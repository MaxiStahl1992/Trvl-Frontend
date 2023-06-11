import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";
import { colors, fonts } from "../../assets/styles/styles";

const HomeScreen = () => {
	return (
		<View style={styles.container}>

			<View style={styles.image_container}>
				<Image 
					source={require('../../assets/images/norway.jpg')}
					style={styles.image}
					resizeMode="cover"
				/>

				<View style={styles.headline_container}>
					<Text style={styles.city}>Bergen</Text>
					<Text style={styles.country}>Norway</Text>
				</View>
			</View>
			
			<View style={styles.content_container}>
				<Text>Home</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
	},
	image_container: {
		flex: 3,
		width: '100%',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	headline_container: {
		position: 'absolute',
		top: '70%',
		left: '70%',
	},
	city: {
		color: colors.white,
		textTransform: "uppercase",
		fontSize: '22',
		fontWeight: '800',
	},
	country: {
		color: colors.white,
		textTransform: "uppercase",
		fontSize: '14',
		fontWeight: '600',
		alignSelf: 'flex-end'
	},
	content_container: {
		flex: 4,
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		width: '100%',
		backgroundColor: colors.white,
		marginTop: -30,
	}
})

export default HomeScreen;
