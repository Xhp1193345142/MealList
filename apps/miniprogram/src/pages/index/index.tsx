import { Button, Text, View } from '@tarojs/components';

import './index.scss';

export default function IndexPage() {
  return (
    <View className="page">
      <Text className="eyebrow">MealList</Text>
      <Text className="title">从菜谱到开饭，\n一张清单搞定</Text>
      <Text className="description">按人数换算食材，合并多道菜的采购清单。</Text>
      <Button className="primary-button">创建第一道菜谱</Button>
    </View>
  );
}
