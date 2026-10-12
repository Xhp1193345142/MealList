import { SymbolView, type SymbolViewProps } from 'expo-symbols';
import { Tabs } from 'expo-router';
import type { ColorValue } from 'react-native';

import { theme } from '@/constants/theme';

const icon = (name: SymbolViewProps['name']) => ({ color, size }: { focused: boolean; color: ColorValue; size: number }) => (
  <SymbolView name={name} tintColor={color} size={size} />
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textMuted,
        tabBarStyle: {
          height: 66,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
      }}
    >
      <Tabs.Screen name="index" options={{ title: '首页', tabBarIcon: icon({ ios: 'house.fill', android: 'home', web: 'home' }) }} />
      <Tabs.Screen name="recipes" options={{ title: '菜谱', tabBarIcon: icon({ ios: 'book.closed.fill', android: 'menu_book', web: 'menu_book' }) }} />
      <Tabs.Screen name="shopping" options={{ title: '清单', tabBarIcon: icon({ ios: 'basket.fill', android: 'shopping_basket', web: 'shopping_basket' }) }} />
      <Tabs.Screen name="profile" options={{ title: '我的', tabBarIcon: icon({ ios: 'person.crop.circle.fill', android: 'account_circle', web: 'account_circle' }) }} />
    </Tabs>
  );
}
