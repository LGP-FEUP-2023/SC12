import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerItems from "../constants/drawer-itens"

const Drawer = createDrawerNavigator();

export default function navigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerType="front"
                initialRouteName="Profile"
                drawerContentOptions={{
                    activeTintColor: '#e91e63',
                    itemStyle: { marginVertical: 10 },
                }}

            >
                {
                    DrawerItems.map(drawer => <Drawer.Screen
                        key={drawer.name}
                    />)
                }
            </Drawer.Navigator>
        </NavigationContainer >
    )
}