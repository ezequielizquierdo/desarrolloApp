import { Text, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    backgroundColor: colors.blue_300,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});