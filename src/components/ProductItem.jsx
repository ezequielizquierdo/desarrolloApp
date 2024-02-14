import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import ProductDescription from "./ProductDescription";




export default function ProductItem({product}) {


  
  return (
    <Card style={{marginVertical: 20}}>
      <Pressable onPress={({ product }) => <ProductDescription product={product} />}>
      <Text style={styles.text}>{product.title}</Text>

      </Pressable>
    </Card>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    // textAlign: "center"
  },
});