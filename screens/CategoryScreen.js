import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";

const CategoryScreen = ({ navigation }) => {
  const onPress = (itemData) => {
    navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
  };

  return (
    <FlatList
      data={CATEGORIES}
      horizontal={false}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CategoryGrid
          title={itemData.item.title}
          bgcolor={itemData.item.color}
          onPress={() => onPress(itemData)}
        />
      )}
    />
  );
};

export default CategoryScreen;
