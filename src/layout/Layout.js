import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Home, Settings, NewTicket } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import LoginForm from '../components/LoginForm';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    tabBar: {
        position: 'relative',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        // height: 60,
        paddingVertical: 10,
        paddingHorizontal: 24,
        backgroundColor: '#299AB1',
        borderTopWidth: 0,
    },
    flexCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    addBtn: {
        top: -10,
        padding: 10,
        width: 80,
        height: 80,
        borderRadius: 500,
        backgroundColor: '#299AB1',
    },
    addIcon: {
        borderWidth: 2,
        borderColor: '#fff',
        padding: 10,
        borderRadius: 24
    },
    tabIcon: {
        color: '#fff',
    },
    tabText: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Montserrat_600SemiBold'
    }
});

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: { ...styles.tabBar },
}

export default function Layout({ navigation: loginNavigation }) {
    return (
        // NavBar in bottom of the screen
        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name='Home' component={Home} options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.flexCenter}>
                                <FontAwesome6 name="ticket" size={20} style={[styles.tabIcon, focused ? { color: '#a4f7e5' } : null]} />
                                <Text style={[styles.tabText, focused ? { color: '#a4f7e5' } : null]}>
                                    Incidencias
                                </Text>
                            </View>
                        );
                    }
                }} />
                <Tab.Screen name='NewTicket' component={NewTicket} options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={[styles.flexCenter, styles.addBtn]}>
                                <FontAwesome6 name="plus" size={25} style={[styles.tabIcon, styles.addIcon, focused ? { color: '#a4f7e5', borderColor: '#a4f7e5' } : null]} />
                            </View>
                        );
                    }
                }} />
                <Tab.Screen name='Settings' children={() => <Settings loginNavigation={loginNavigation} />} options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.flexCenter}>
                                <FontAwesome5 name="cog" size={20} style={[styles.tabIcon, focused ? { color: '#a4f7e5' } : null]} />
                                <Text style={[styles.tabText, focused ? { color: '#a4f7e5' } : null]}>
                                    Configuración
                                </Text>
                            </View>
                        );
                    }
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}