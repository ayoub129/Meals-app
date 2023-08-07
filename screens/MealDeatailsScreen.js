import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import List from "../components/List";

const MealDeatailsScreen = ({ route }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailsItem}>{selectedMeal.duration}m</Text>
        <Text style={styles.detailsItem}>
          {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailsItem}>
          {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>
      {/* list container */}
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Ingrediants</Text>
          </View>
          <List data={selectedMeal.ingredients} />
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Steps</Text>
          </View>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDeatailsScreen;
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 15,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    margin: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    margin: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
