import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";

export default function Home({setCategorySelected}) {
  return (
    <View style={styles.container}>
      <Header title={'Inicio'}/>
      <Categories setCategorySelected={setCategorySelected} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});