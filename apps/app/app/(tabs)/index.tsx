import { Link } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '@/constants/theme';
import { useMealPlanStore } from '@/features/meal-plan/mealPlan.store';
import { recipes } from '@/features/recipes/recipes';

const weekday = new Intl.DateTimeFormat('zh-CN', { weekday: 'long' }).format(new Date());
const monthDay = new Intl.DateTimeFormat('zh-CN', { month: 'long', day: 'numeric' }).format(new Date());

export default function HomeScreen() {
  const selectedRecipeIds = useMealPlanStore((state) => state.selectedRecipeIds);
  const selectedRecipes = recipes.filter((recipe) => selectedRecipeIds.includes(recipe.id));
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <View style={styles.brand}>
            <View style={styles.brandMark}>
              <SymbolView name={{ ios: 'leaf.fill', android: 'eco', web: 'eco' }} tintColor={theme.colors.primary} size={18} />
            </View>
            <View>
              <Text style={styles.brandName}>一饭清单</Text>
              <Text style={styles.brandTagline}>让家常饭，更简单</Text>
            </View>
          </View>
          <Link href="/(tabs)/profile" asChild>
            <Pressable accessibilityRole="button" accessibilityLabel="打开个人主页" style={styles.avatarButton}>
              <SymbolView name={{ ios: 'person.fill', android: 'person', web: 'person' }} tintColor={theme.colors.primary} size={18} />
            </Pressable>
          </Link>
        </View>

        <View style={styles.greeting}>
          <Text style={styles.dateLine}>{weekday} · {monthDay}</Text>
          <Text style={styles.greetingTitle}>晚饭，慢慢准备。</Text>
          <Text style={styles.greetingCopy}>从喜欢的家常菜开始，把今晚安排得刚刚好。</Text>
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroCopy}>
            <Text style={styles.heroEyebrow}>今晚这一餐</Text>
            <Text style={styles.heroTitle}>想吃什么？</Text>
            <Text style={styles.heroDescription}>选几道喜欢的菜，食材清单一起准备好。</Text>
            <Link href="/(tabs)/recipes" asChild>
              <Pressable accessibilityRole="button" style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
                <Text style={styles.primaryButtonText}>开始选菜</Text>
                <SymbolView name={{ ios: 'arrow.right', android: 'arrow_forward', web: 'arrow_forward' }} tintColor={theme.colors.white} size={16} />
              </Pressable>
            </Link>
          </View>
          <Image source={recipes[0].image} style={styles.heroImage} />
          <View style={styles.heroImageRing} />
        </View>

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionEyebrow}>准备一顿好饭</Text>
            <Text style={styles.sectionTitle}>今晚的计划</Text>
          </View>
          <View style={styles.statusPill}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>{selectedRecipes.length ? `已选 ${selectedRecipes.length} 道` : '待开始'}</Text>
          </View>
        </View>

        <Link href="/(tabs)/recipes" asChild>
          <Pressable accessibilityRole="button" style={({ pressed }) => [styles.planCard, pressed && styles.pressed]}>
            <View style={styles.planIcon}>
              <SymbolView name={{ ios: 'plus', android: 'add', web: 'add' }} tintColor={theme.colors.accent} size={22} />
            </View>
            <View style={styles.planCopy}>
              <Text style={styles.planTitle}>{selectedRecipes.length ? selectedRecipes.map((recipe) => recipe.name).join('、') : '还没有选菜'}</Text>
              <Text style={styles.planDescription}>{selectedRecipes.length ? '点这里继续添加今晚的菜' : '选好菜谱后，清单会自动为你整理'}</Text>
            </View>
            <SymbolView name={{ ios: 'chevron.right', android: 'chevron_right', web: 'chevron_right' }} tintColor={theme.colors.textMuted} size={16} />
          </Pressable>
        </Link>

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionEyebrow}>简单又好吃</Text>
            <Text style={styles.sectionTitle}>常做菜</Text>
          </View>
          <Link href="/(tabs)/recipes" asChild>
            <Pressable accessibilityRole="button" style={styles.seeAll}>
              <Text style={styles.seeAllText}>查看全部</Text>
              <SymbolView name={{ ios: 'chevron.right', android: 'chevron_right', web: 'chevron_right' }} tintColor={theme.colors.textSecondary} size={13} />
            </Pressable>
          </Link>
        </View>

        <View style={styles.recipeRow}>
          {recipes.map((recipe) => (
            <Link key={recipe.id} href="/(tabs)/recipes" asChild>
              <Pressable accessibilityRole="button" style={({ pressed }) => [styles.recipeCard, pressed && styles.pressed]}>
                <Image source={recipe.image} style={styles.recipeImage} />
                <View style={styles.recipeMeta}>
                  <Text style={styles.recipeName}>{recipe.name}</Text>
                  <Text style={styles.recipeDetail}>{recipe.minutes} 分钟 · {recipe.difficulty}</Text>
                </View>
              </Pressable>
            </Link>
          ))}
        </View>

        <View style={styles.footerNote}>
          <Text style={styles.footerNoteText}>一饭一食，都是家的味道。</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.background },
  content: { paddingHorizontal: 22, paddingTop: 8, paddingBottom: 28 },
  topBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  brandMark: { width: 38, height: 38, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.primarySoft },
  brandName: { color: theme.colors.primary, fontSize: 17, fontWeight: '800', letterSpacing: 0.4 },
  brandTagline: { marginTop: 1, color: theme.colors.textSecondary, fontSize: 10, letterSpacing: 0.5 },
  avatarButton: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20, backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border },
  greeting: { marginTop: 28, marginBottom: 20 },
  dateLine: { color: theme.colors.textSecondary, fontSize: 12, fontWeight: '500', letterSpacing: 0.5 },
  greetingTitle: { marginTop: 8, color: theme.colors.primary, fontSize: 27, lineHeight: 34, fontWeight: '800', letterSpacing: -0.5 },
  greetingCopy: { marginTop: 5, color: theme.colors.textSecondary, fontSize: 13, lineHeight: 20 },
  heroCard: { minHeight: 204, overflow: 'hidden', flexDirection: 'row', position: 'relative', padding: 20, borderRadius: theme.radius.hero, backgroundColor: theme.colors.primary },
  heroCopy: { zIndex: 2, width: '67%', justifyContent: 'center' },
  heroEyebrow: { color: '#DCE6DA', fontSize: 12, fontWeight: '600', letterSpacing: 1 },
  heroTitle: { marginTop: 7, color: theme.colors.white, fontSize: 27, lineHeight: 33, fontWeight: '800' },
  heroDescription: { marginTop: 7, maxWidth: 190, color: '#E5E9E0', fontSize: 12, lineHeight: 18 },
  primaryButton: { height: 42, marginTop: 15, alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 16, borderRadius: 14, backgroundColor: theme.colors.accent },
  primaryButtonText: { color: theme.colors.white, fontSize: 13, fontWeight: '700' },
  heroImage: { position: 'absolute', top: 25, right: -18, width: 145, height: 155, borderRadius: 72, transform: [{ rotate: '8deg' }] },
  heroImageRing: { position: 'absolute', top: 16, right: -27, width: 164, height: 174, borderRadius: 86, borderWidth: 1, borderColor: 'rgba(255,255,255,0.24)' },
  sectionHeader: { marginTop: 27, marginBottom: 12, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' },
  sectionEyebrow: { color: theme.colors.textMuted, fontSize: 11, letterSpacing: 0.6 },
  sectionTitle: { marginTop: 3, color: theme.colors.primary, fontSize: 20, fontWeight: '800' },
  statusPill: { marginBottom: 2, flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 10, paddingVertical: 6, borderRadius: theme.radius.pill, backgroundColor: theme.colors.surfaceWarm },
  statusDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: theme.colors.accent },
  statusText: { color: theme.colors.textSecondary, fontSize: 11, fontWeight: '600' },
  planCard: { minHeight: 82, flexDirection: 'row', alignItems: 'center', padding: 14, gap: 12, borderRadius: 20, backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border },
  planIcon: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: theme.colors.accentSoft },
  planCopy: { flex: 1 },
  planTitle: { color: theme.colors.text, fontSize: 14, fontWeight: '700' },
  planDescription: { marginTop: 4, color: theme.colors.textSecondary, fontSize: 11, lineHeight: 16 },
  seeAll: { flexDirection: 'row', alignItems: 'center', gap: 3, paddingVertical: 6 },
  seeAllText: { color: theme.colors.textSecondary, fontSize: 11, fontWeight: '600' },
  recipeRow: { flexDirection: 'row', gap: 12 },
  recipeCard: { flex: 1, overflow: 'hidden', borderRadius: 19, backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border },
  recipeImage: { width: '100%', height: 112 },
  recipeMeta: { paddingHorizontal: 11, paddingVertical: 10 },
  recipeName: { color: theme.colors.text, fontSize: 13, fontWeight: '700' },
  recipeDetail: { marginTop: 4, color: theme.colors.textSecondary, fontSize: 10 },
  footerNote: { marginTop: 22, alignItems: 'center' },
  footerNoteText: { color: theme.colors.textMuted, fontSize: 11, letterSpacing: 1 },
  pressed: { opacity: 0.82 },
});
