import { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import allProducts from "../data/products.json"
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import Header from "../components/Header";


export default function ItemListCategories({ category }) {
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("");

  useEffect(() => {

    if (category) {
      const filteredProducts = allProducts.filter((product) => {
        return product.category === category
      })

      const finalFilteredProducts = filteredProducts.filter((product) => product.title.includes(keyword));

      setProducts(finalFilteredProducts)
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      console.log("filteredProducts en else", filteredProducts)

      setProducts(filteredProducts);
    }

  }, [category, keyword])

  console.log("products", products)

  return (
    <View style={styles.container}>
      <View>
      <Header title={'Inicio'}/>

      </View>
      
      <Search onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",

  },
});