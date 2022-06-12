import { ThemeProvider } from "styled-components"
import { Dashboard } from "./src/screens/Dashboard"
import theme from "./src/global/styles/theme"

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins"

import Entypo from "@expo/vector-icons/Entypo"
import * as SplashScreen from "expo-splash-screen"
import * as Font from "expo-font"
import { useCallback, useEffect, useState } from "react"
import { View } from "react-native"
import { StatusBar } from "expo-status-bar"

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync()

        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font)
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" />
        <Dashboard />
      </ThemeProvider>
    </View>
  )
}
