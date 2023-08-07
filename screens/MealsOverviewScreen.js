import { FlatList, StyleSheet, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === categoryId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  const handlePress = (item) => {
    navigation.navigate("MealDeatails", { mealId: item.id });
  };

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        onPress={() => handlePress(itemData.item)}
        data={itemData.item}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
