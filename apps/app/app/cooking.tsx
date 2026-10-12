import { router } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '@/constants/theme';
import { useMealPlanStore } from '@/features/meal-plan/mealPlan.store';
import { recipes } from '@/features/recipes/recipes';

export default function CookingScreen() {
  const selectedRecipeIds = useMealPlanStore((state) => state.selectedRecipeIds);
  const selectedRecipe = recipes.find((recipe) => selectedRecipeIds.includes(recipe.id)) ?? recipes[0];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Pressable accessibilityRole="button" accessibilityLabel="返回" onPress={() => router.back()} style={styles.backButton}>
          <SymbolView name={{ ios: 'chevron.left', android: 'arrow_back', web: 'arrow_back' }} tintColor={theme.colors.primary} size={19} />
        </Pressable>
        <Text style={styles.headerTitle}>跟着步骤做</Text>
        <View style={styles.headerSpacer} />
      </View>
      <View style={styles.content}>
        <View style={styles.progressRow}><Text style={styles.eyebrow}>今晚的第一道菜</Text><Text style={styles.stepCount}>01 <Text style={styles.stepOf}>/ 04</Text></Text></View>
        <View style={styles.progressTrack}><View style={styles.progressValue} /></View>
        <Text style={styles.recipeName}>{selectedRecipe.name}</Text>
        <Text style={styles.lead}>先把食材准备好，做饭就会从容很多。</Text>
        <View style={styles.stepCard}>
          <View style={styles.stepNumber}><Text style={styles.stepNumberText}>1</Text></View>
          <Text style={styles.stepTitle}>准备食材</Text>
          <Text style={styles.stepDescription}>洗净并切好主要食材，放在手边备用。</Text>
          <View style={styles.tip}><SymbolView name={{ ios: 'lightbulb', android: 'lightbulb', web: 'lightbulb' }} tintColor={theme.colors.accent} size={17} /><Text style={styles.tipText}>小提示：提前备菜，烹饪时不容易手忙脚乱。</Text></View>
        </View>
        <View style={styles.placeholder}><SymbolView name={{ ios: 'sparkles', android: 'auto_awesome', web: 'auto_awesome' }} tintColor={theme.colors.accent} size={20} /><Text style={styles.placeholderText}>详细步骤和计时功能正在搭建中</Text></View>
      </View>
      <View style={styles.bottomBar}><Pressable accessibilityRole="button" style={({ pressed }) => [styles.nextButton, pressed && styles.pressed]} onPress={() => router.back()}><Text style={styles.nextButtonText}>完成演示步骤</Text><SymbolView name={{ ios: 'checkmark', android: 'check', web: 'check' }} tintColor={theme.colors.white} size={16} /></Pressable></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.background },
  header: { minHeight: 53, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 },
  backButton: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 14, backgroundColor: theme.colors.surface },
  headerTitle: { color: theme.colors.primary, fontSize: 15, fontWeight: '800' },
  headerSpacer: { width: 40 },
  content: { flex: 1, paddingHorizontal: 23, paddingTop: 23 },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  eyebrow: { color: theme.colors.accent, fontSize: 12, fontWeight: '700' },
  stepCount: { color: theme.colors.primary, fontSize: 13, fontWeight: '800' },
  stepOf: { color: theme.colors.textMuted, fontWeight: '500' },
  progressTrack: { height: 5, marginTop: 12, overflow: 'hidden', borderRadius: 5, backgroundColor: theme.colors.border },
  progressValue: { width: '25%', height: '100%', borderRadius: 5, backgroundColor: theme.colors.accent },
  recipeName: { marginTop: 27, color: theme.colors.primary, fontSize: 28, fontWeight: '800' },
  lead: { marginTop: 7, color: theme.colors.textSecondary, fontSize: 13, lineHeight: 21 },
  stepCard: { marginTop: 25, padding: 20, borderRadius: theme.radius.hero, backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border },
  stepNumber: { width: 39, height: 39, alignItems: 'center', justifyContent: 'center', borderRadius: 14, backgroundColor: theme.colors.accentSoft },
  stepNumberText: { color: theme.colors.accent, fontSize: 17, fontWeight: '800' },
  stepTitle: { marginTop: 17, color: theme.colors.primary, fontSize: 19, fontWeight: '800' },
  stepDescription: { marginTop: 8, color: theme.colors.textSecondary, fontSize: 13, lineHeight: 21 },
  tip: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginTop: 19, padding: 12, borderRadius: 14, backgroundColor: theme.colors.surfaceWarm },
  tipText: { flex: 1, color: theme.colors.textSecondary, fontSize: 11, lineHeight: 17 },
  placeholder: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 20, padding: 16 },
  placeholderText: { color: theme.colors.textMuted, fontSize: 11 },
  bottomBar: { paddingHorizontal: 22, paddingTop: 12, paddingBottom: 17, borderTopWidth: 1, borderTopColor: theme.colors.border },
  nextButton: { height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, borderRadius: 17, backgroundColor: theme.colors.primary },
  nextButtonText: { color: theme.colors.white, fontSize: 14, fontWeight: '700' },
  pressed: { opacity: 0.82 },
});
