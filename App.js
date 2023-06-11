import { SafeAreaView, View, StatusBar } from "react-native";
import { useCallback } from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import Navigation from "./src/components/navigation/navigation";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { colors } from "./assets/styles/styles";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
      'DaysOne': require('./assets/fonts/days-one/DaysOne-Regular.ttf'),
      'Figtree': require('./assets/fonts/figtree/Figtree-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) {
    return null;
  }

	return (
		<Provider store={store}>
			<View style={{ flex: 1, backgroundColor: colors.white }} onLayout={onLayoutRootView}>
				<StatusBar hidden />
				<Navigation />
			</View>
		</Provider>
	);
}
