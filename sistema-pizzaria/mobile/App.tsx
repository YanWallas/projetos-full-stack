import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';



export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#1a1a1a" barStyle="light-content" translucent={false} />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}