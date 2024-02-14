import { FlatList, StyleSheet, Text, View } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";

export default function Categories({setCategorySelected}) {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem setCategorySelected={setCategorySelected} category={item} />}
        keyExtractor={(category) => category}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    flexGrow: 1,
  },
})