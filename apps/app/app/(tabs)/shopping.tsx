import { Link } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '@/constants/theme';
import { useMealPlanStore } from '@/features/meal-plan/mealPlan.store';
import { recipes } from '@/features/recipes/recipes';

export default function ShoppingScreen() {
  const selectedRecipeIds = useMealPlanStore((state) => state.selectedRecipeIds);
  const clear = useMealPlanStore((state) => state.clear);
  const selectedRecipes = recipes.filter((recipe) => selectedRecipeIds.includes(recipe.id));

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headingRow}>
          <View>
            <Text style={styles.eyebrow}>采购前看一眼</Text>
            <Text style={styles.title}>食材清单</Text>
          </View>
          {selectedRecipes.length > 0 && <Pressable accessibilityRole="button" onPress={clear}><Text style={styles.clear}>清空菜单</Text></Pressable>}
        </View>

        {selectedRecipes.length === 0 ? (
          <View style={styles.emptyCard}>
            <View style={styles.emptyIcon}><SymbolView name={{ ios: 'basket', android: 'shopping_basket', web: 'shopping_basket' }} tintColor={theme.colors.accent} size={27} /></View>
            <Text style={styles.emptyTitle}>清单还空着</Text>
            <Text style={styles.emptyCopy}>去菜谱里挑几道今晚想吃的菜，食材会集中放在这里。</Text>
            <Link href="/(tabs)/recipes" asChild><Pressable accessibilityRole="button" style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}><Text style={styles.primaryButtonText}>去选菜</Text><SymbolView name={{ ios: 'arrow.right', android: 'arrow_forward', web: 'arrow_forward' }} tintColor={theme.colors.white} size={15} /></Pressable></Link>
          </View>
        ) : (
          <>
            <View style={styles.summaryCard}>
              <View style={styles.summaryIcon}><SymbolView name={{ ios: 'checkmark', android: 'check', web: 'check' }} tintColor={theme.colors.primary} size={18} /></View>
              <View style={{ flex: 1 }}><Text style={styles.summaryTitle}>今晚菜单已准备好</Text><Text style={styles.summaryCopy}>已选择 {selectedRecipes.length} 道菜 · 食材明细接入后端后自动汇总</Text></View>
            </View>
            <Text style={styles.sectionTitle}>已选菜谱</Text>
            {selectedRecipes.map((recipe) => (
              <View key={recipe.id} style={styles.recipeRow}>
                <View style={styles.recipeIcon}><SymbolView name={{ ios: 'fork.knife', android: 'restaurant', web: 'restaurant' }} tintColor={theme.colors.accent} size={18} /></View>
                <View style={{ flex: 1 }}><Text style={styles.recipeName}>{recipe.name}</Text><Text style={styles.recipeDetail}>{recipe.minutes} 分钟 · {recipe.difficulty}</Text></View>
                <SymbolView name={{ ios: 'checkmark.circle.fill', android: 'check_circle', web: 'check_circle' }} tintColor={theme.colors.primary} size={19} />
              </View>
            ))}
            <View style={styles.notice}><SymbolView name={{ ios: 'info.circle', android: 'info', web: 'info' }} tintColor={theme.colors.textMuted} size={15} /><Text style={styles.noticeText}>当前为界面演示。食材数量和采购勾选将在接入菜谱数据后完善。</Text></View>
            <Link href="/cooking" asChild><Pressable accessibilityRole="button" style={({ pressed }) => [styles.cookButton, pressed && styles.pressed]}><Text style={styles.cookButtonText}>开始做饭</Text><SymbolView name={{ ios: 'arrow.right', android: 'arrow_forward', web: 'arrow_forward' }} tintColor={theme.colors.white} size={15} /></Pressable></Link>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.background },
  content: { paddingHorizontal: 22, paddingTop: 18, paddingBottom: 30 },
  headingRow: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 24 },
  eyebrow: { color: theme.colors.accent, fontSize: 12, fontWeight: '700', letterSpacing: 0.8 },
  title: { marginTop: 5, color: theme.colors.primary, fontSize: 28, fontWeight: '800' },
  clear: { padding: 8, color: theme.colors.textSecondary, fontSize: 12, fontWeight: '600' },
  emptyCard: { alignItems: 'center', paddingHorizontal: 27, paddingTop: 34, paddingBottom: 32, borderRadius: theme.radius.hero, backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border },
  emptyIcon: { width: 64, height: 64, alignItems: 'center', justifyContent: 'center', borderRadius: 23, backgroundColor: theme.colors.accentSoft },
  emptyTitle: { marginTop: 17, color: theme.colors.primary, fontSize: 20, fontWeight: '800' },
  emptyCopy: { marginTop: 8, color: theme.colors.textSecondary, fontSize: 13, lineHeight: 21, textAlign: 'center' },
  primaryButton: { height: 46, marginTop: 22, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 9, paddingHorizontal: 21, borderRadius: 15, backgroundColor: theme.colors.accent },
  primaryButtonText: { color: theme.colors.white, fontSize: 13, fontWeight: '700' },
  summaryCard: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 16, borderRadius: 20, backgroundColor: theme.colors.primarySoft },
  summaryIcon: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 14, backgroundColor: theme.colors.white },
  summaryTitle: { color: theme.colors.primary, fontSize: 14, fontWeight: '800' },
  summaryCopy: { marginTop: 4, color: theme.colors.textSecondary, fontSize: 10, lineHeight: 15 },
  sectionTitle: { marginTop: 26, marginBottom: 11, color: theme.colors.primary, fontSize: 17, fontWeight: '800' },
  recipeRow: { minHeight: 72, flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 14, borderBottomWidth: 1, borderBottomColor: theme.colors.border },
  recipeIcon: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 14, backgroundColor: theme.colors.surfaceWarm },
  recipeName: { color: theme.colors.text, fontSize: 14, fontWeight: '700' },
  recipeDetail: { marginTop: 4, color: theme.colors.textSecondary, fontSize: 11 },
  notice: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginTop: 22, padding: 13, borderRadius: 15, backgroundColor: theme.colors.surfaceWarm },
  noticeText: { flex: 1, color: theme.colors.textSecondary, fontSize: 11, lineHeight: 17 },
  cookButton: { height: 50, marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 9, borderRadius: 17, backgroundColor: theme.colors.primary },
  cookButtonText: { color: theme.colors.white, fontSize: 14, fontWeight: '700' },
  pressed: { opacity: 0.82 },
});
