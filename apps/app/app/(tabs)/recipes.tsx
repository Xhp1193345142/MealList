import { Link } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '@/constants/theme';
import { useMealPlanStore } from '@/features/meal-plan/mealPlan.store';
import { recipes } from '@/features/recipes/recipes';

export default function RecipesScreen() {
  const selectedRecipeIds = useMealPlanStore((state) => state.selectedRecipeIds);
  const toggleRecipe = useMealPlanStore((state) => state.toggleRecipe);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.heading}>
          <Text style={styles.eyebrow}>从喜欢的味道开始</Text>
          <Text style={styles.title}>今天想做什么？</Text>
          <Text style={styles.subtitle}>先选几道菜，食材清单会跟着准备好。</Text>
        </View>
        <View style={styles.filterRow}>
          <View style={styles.filterActive}><Text style={styles.filterActiveText}>家常菜</Text></View>
          <View style={styles.filter}><Text style={styles.filterText}>快手菜</Text></View>
          <View style={styles.filter}><Text style={styles.filterText}>素食</Text></View>
          <Text style={styles.count}>{recipes.length} 道</Text>
        </View>
        {recipes.map((recipe, index) => {
          const selected = selectedRecipeIds.includes(recipe.id);
          return (
            <View key={recipe.id} style={styles.card}>
              <Image source={recipe.image} style={styles.image} />
              <View style={styles.cardBody}>
                <View style={styles.cardTitleRow}>
                  <View style={styles.titleCopy}>
                    <Text style={styles.recipeName}>{recipe.name}</Text>
                    <Text style={styles.description}>{recipe.description}</Text>
                  </View>
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={selected ? `从今晚菜单移除${recipe.name}` : `把${recipe.name}加入今晚菜单`}
                    accessibilityState={{ selected }}
                    onPress={() => toggleRecipe(recipe.id)}
                    style={({ pressed }) => [styles.addButton, selected && styles.addButtonSelected, pressed && styles.pressed]}>
                    <SymbolView
                      name={selected
                        ? { ios: 'checkmark', android: 'check', web: 'check' }
                        : { ios: 'plus', android: 'add', web: 'add' }}
                      tintColor={selected ? theme.colors.white : theme.colors.primary}
                      size={19}
                    />
                  </Pressable>
                </View>
                <View style={styles.metaRow}>
                  <View style={styles.metaItem}><SymbolView name={{ ios: 'clock', android: 'schedule', web: 'schedule' }} tintColor={theme.colors.textMuted} size={14} /><Text style={styles.metaText}>{recipe.minutes} 分钟</Text></View>
                  <View style={styles.metaItem}><SymbolView name={{ ios: 'sparkles', android: 'auto_awesome', web: 'auto_awesome' }} tintColor={theme.colors.textMuted} size={14} /><Text style={styles.metaText}>{recipe.difficulty}</Text></View>
                  {index === 0 && <View style={styles.recommended}><Text style={styles.recommendedText}>今日推荐</Text></View>}
                </View>
              </View>
            </View>
          );
        })}
        <View style={styles.bottomSpace} />
      </ScrollView>
      {selectedRecipeIds.length > 0 && (
        <View style={styles.bottomBar}>
          <View><Text style={styles.bottomCount}>已选 {selectedRecipeIds.length} 道菜</Text><Text style={styles.bottomHint}>下一步整理食材清单</Text></View>
          <Link href="/(tabs)/shopping" asChild>
            <Pressable accessibilityRole="button" style={({ pressed }) => [styles.continueButton, pressed && styles.pressed]}>
              <Text style={styles.continueText}>查看清单</Text>
              <SymbolView name={{ ios: 'arrow.right', android: 'arrow_forward', web: 'arrow_forward' }} tintColor={theme.colors.white} size={15} />
            </Pressable>
          </Link>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.background },
  content: { paddingHorizontal: 22, paddingTop: 15, paddingBottom: 24 },
  heading: { marginBottom: 21 },
  eyebrow: { color: theme.colors.accent, fontSize: 12, fontWeight: '700', letterSpacing: 0.8 },
  title: { marginTop: 6, color: theme.colors.primary, fontSize: 27, fontWeight: '800', letterSpacing: -0.5 },
  subtitle: { marginTop: 7, color: theme.colors.textSecondary, fontSize: 13, lineHeight: 20 },
  filterRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 17 },
  filterActive: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: theme.radius.pill, backgroundColor: theme.colors.primary },
  filterActiveText: { color: theme.colors.white, fontSize: 12, fontWeight: '700' },
  filter: { paddingHorizontal: 13, paddingVertical: 8, borderRadius: theme.radius.pill, backgroundColor: theme.colors.surfaceWarm },
  filterText: { color: theme.colors.textSecondary, fontSize: 12, fontWeight: '600' },
  count: { marginLeft: 'auto', color: theme.colors.textMuted, fontSize: 11 },
  card: { overflow: 'hidden', marginBottom: 14, borderRadius: theme.radius.card, backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border },
  image: { width: '100%', height: 190 },
  cardBody: { paddingHorizontal: 16, paddingTop: 14, paddingBottom: 15 },
  cardTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  titleCopy: { flex: 1 },
  recipeName: { color: theme.colors.text, fontSize: 18, fontWeight: '800' },
  description: { marginTop: 4, color: theme.colors.textSecondary, fontSize: 12 },
  addButton: { width: 42, height: 42, borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.primarySoft },
  addButtonSelected: { backgroundColor: theme.colors.primary },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 15, marginTop: 14 },
  metaItem: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  metaText: { color: theme.colors.textSecondary, fontSize: 11 },
  recommended: { marginLeft: 'auto', paddingHorizontal: 9, paddingVertical: 5, borderRadius: theme.radius.pill, backgroundColor: theme.colors.accentSoft },
  recommendedText: { color: theme.colors.accent, fontSize: 10, fontWeight: '700' },
  bottomSpace: { height: 82 },
  bottomBar: { position: 'absolute', left: 0, right: 0, bottom: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 22, paddingTop: 13, paddingBottom: 18, backgroundColor: theme.colors.background, borderTopWidth: 1, borderTopColor: theme.colors.border },
  bottomCount: { color: theme.colors.primary, fontSize: 14, fontWeight: '800' },
  bottomHint: { marginTop: 3, color: theme.colors.textMuted, fontSize: 10 },
  continueButton: { height: 44, flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 17, borderRadius: 15, backgroundColor: theme.colors.accent },
  continueText: { color: theme.colors.white, fontSize: 13, fontWeight: '700' },
  pressed: { opacity: 0.82 },
});
