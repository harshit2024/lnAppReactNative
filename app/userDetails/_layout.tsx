// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/components/useColorScheme';

// export {
//   // Catch any errors thrown by the Layout component.
//   ErrorBoundary,
// } from 'expo-router';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)',
// };

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const [loaded, error] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//     ...FontAwesome.font,
//   });

//   // Expo Router uses Error Boundaries to catch errors in the navigation tree.
//   useEffect(() => {
//     if (error) throw error;
//   }, [error]);

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return <RootLayoutNav />;
// }

// function RootLayoutNav() {
//   const colorScheme = useColorScheme();

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
//       </Stack>
//     </ThemeProvider>
//   );
// }
// app/_layout.tsx
import { Stack } from 'expo-router';


export default function Layout() {
  return (
    <Stack 
       screenOptions={
        {
          headerShown: false
       }
      }
    >
      <Stack.Screen
        name="userForm" // This corresponds to app/index.tsx
        options={{ title: 'Baisc Details',  headerShown: true, headerBackVisible: false, 
          headerLeft: () => null }}
      />
      <Stack.Screen
        name="secondForm"  // This corresponds to app/modal.tsx
        options={{ title: 'Create Billing Company',
          headerShown: true ,
          }}
      />
      <Stack.Screen
        name="thirdForm"  // This corresponds to app/modal.tsx
        options={{ title: 'Create Billing Company',
          headerShown: true ,
          }}
      />
    
    </Stack>
  );
}