import { Pressable, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryGrid = ({ title, bgcolor, onPress }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.gridItem, { backgroundColor: bgcolor }]}>
      <Pressable
        onPress={onPress}
        style={styles.btn}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    overflow: "hidden",
  },
  btn: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
