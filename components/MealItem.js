import { Text, View, Pressable, Image, StyleSheet } from "react-native";

const MealItem = ({ data, onPress }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable onPress={onPress} android_ripple={{ color: "#ccc" }}>
        <View>
          <Image style={styles.image} source={{ uri: data.imageUrl }} />
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailsItem}>{data.duration}m</Text>
          <Text style={styles.detailsItem}>
            {data.complexity.toUpperCase()}
          </Text>
          <Text style={styles.detailsItem}>
            {data.affordability.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;
const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
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
});
