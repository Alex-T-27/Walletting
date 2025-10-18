import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  initialRouteName: 'User/Login',
};
export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions = {{ headerShown: false }}>
        <Stack.Screen name="Signup" options={{ title: 'Sign up' }} />
        <Stack.Screen name="Login" options={{ title: 'Log in' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
