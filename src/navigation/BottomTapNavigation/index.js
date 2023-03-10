//Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'screens/Home';
import HistoryScreen from 'screens/History';
import AlarmScreen from 'screens/Alarm';
import MyPageScreen from 'screens/MyPage';

//Components
import { Ionicons } from '@expo/vector-icons';
import { COLOR } from 'constants/design'

const BottomTab = createBottomTabNavigator();

export default function BottomTapNavigation() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: COLOR.MAIN,
        tabBarInactiveTintColor: '#AAAAAA',
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home-outline'
              : 'home-outline';
          }
          if (route.name === 'History') {
            iconName = focused
              ? 'newspaper-outline'
              : 'newspaper-outline';
          }
          if (route.name === 'Alarm') {
            iconName = focused
              ? 'notifications-outline'
              : 'notifications-outline';
          }
          if (route.name === 'MyPage') {
            iconName = focused
              ? 'person-outline'
              : 'person-outline';
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <BottomTab.Group screenOptions={{ 
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
        <BottomTab.Screen name="Home" component={HomeScreen} options={{ title: '홈', headerShown: false }} />
        <BottomTab.Screen name="History" component={HistoryScreen} options={{ title: '이용 내역' }} />
        <BottomTab.Screen name="Alarm" component={AlarmScreen} options={{ title: '알림' }} />
        <BottomTab.Screen name="MyPage" component={MyPageScreen} options={{ title: '마이페이지' }} />
      </BottomTab.Group>
    </BottomTab.Navigator>
  );
}