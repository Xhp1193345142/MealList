import { SymbolView } from 'expo-symbols';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '@/constants/theme';

const rows = [
  { icon: 'person.crop.circle', android: 'account_circle', title: '个人资料', detail: '完善你的饮食偏好' },
  { icon: 'heart', android: 'favorite_border', title: '我的收藏', detail: '收藏喜欢的家常菜' },
  { icon: 'bell', android: 'notifications_none', title: '提醒设置', detail: '管理用餐和备菜提醒' },
  { icon: 'questionmark.circle', android: 'help_outline', title: '帮助与反馈', detail: '告诉我们如何做得更好' },
] as const;

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.eyebrow}>关于你的厨房</Text>
        <Text style={styles.title}>我的</Text>
        <View style={styles.profileCard}>
          <View style={styles.avatar}><SymbolView name={{ ios: 'person.fill', android: 'person', web: 'person' }} tintColor={theme.colors.primary} size={26} /></View>
          <View><Text style={styles.name}>欢迎来到一饭清单</Text><Text style={styles.subtitle}>登录与云端同步稍后接入</Text></View>
          <SymbolView name={{ ios: 'chevron.right', android: 'chevron_right', web: 'chevron_right' }} tintColor={theme.colors.textMuted} size={16} />
        </View>
        <Text style={styles.sectionTitle}>设置</Text>
        <View style={styles.menuCard}>
          {rows.map((row, index) => (
            <View key={row.title} style={[styles.menuRow, index !== rows.length - 1 && styles.menuDivider]}>
              <View style={styles.menuIcon}><SymbolView name={{ ios: row.icon, android: row.android, web: row.android }} tintColor={theme.colors.primary} size={18} /></View>
              <View style={styles.menuCopy}><Text style={styles.menuTitle}>{row.title}</Text><Text style={styles.menuDetail}>{row.detail}</Text></View>
              <SymbolView name={{ ios: 'chevron.right', android: 'chevron_right', web: 'chevron_right' }} tintColor={theme.colors.textMuted} size={14} />
            </View>
          ))}
        </View>
        <View style={styles.brandNote}><Text style={styles.brandMark}>一饭清单</Text><Text style={styles.brandCaption}>让家常饭，更简单</Text></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.background },
  content: { paddingHorizontal: 22, paddingTop: 18, paddingBottom: 30 },
  eyebrow: { color: theme.colors.accent, fontSize: 12, fontWeight: '700', letterSpacing: 0.8 },
  title: { marginTop: 5, marginBottom: 21, color: theme.colors.primary, fontSize: 28, fontWeight: '800' },
  profileCard: { minHeight: 98, flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 17, borderRadius: 22, backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border },
  avatar: { width: 54, height: 54, alignItems: 'center', justifyContent: 'center', borderRadius: 19, backgroundColor: theme.colors.primarySoft },
  name: { color: theme.colors.primary, fontSize: 15, fontWeight: '800' },
  subtitle: { marginTop: 5, color: theme.colors.textSecondary, fontSize: 11 },
  sectionTitle: { marginTop: 28, marginBottom: 12, color: theme.colors.primary, fontSize: 17, fontWeight: '800' },
  menuCard: { paddingHorizontal: 14, borderRadius: 21, backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border },
  menuRow: { minHeight: 71, flexDirection: 'row', alignItems: 'center', gap: 12 },
  menuDivider: { borderBottomWidth: 1, borderBottomColor: theme.colors.border },
  menuIcon: { width: 39, height: 39, alignItems: 'center', justifyContent: 'center', borderRadius: 14, backgroundColor: theme.colors.surfaceWarm },
  menuCopy: { flex: 1 },
  menuTitle: { color: theme.colors.text, fontSize: 13, fontWeight: '700' },
  menuDetail: { marginTop: 4, color: theme.colors.textMuted, fontSize: 10 },
  brandNote: { alignItems: 'center', marginTop: 35 },
  brandMark: { color: theme.colors.primary, fontSize: 13, fontWeight: '800', letterSpacing: 1 },
  brandCaption: { marginTop: 5, color: theme.colors.textMuted, fontSize: 10 },
});
