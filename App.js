import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
} from "react-native";
import { ValidationModal } from "./src/components/ValidationModal";
import { ProductItem } from "./src/components/ProductItem";
import { CartComponent } from "./src/components/CartComponent";
import { TextImputComponent } from "./src/components/TextImputComponent";

const DATA = [
  {
    name: "Remera",
    id: 1,
  },
  {
    name: "Pantalón",
    id: 2,
  },
  {
    name: "Gorra",
    id: 3,
  },
];

export default function App() {
  const [counter, setCounter] = useState(0);
  const [imputValue, setImputValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);
  const [productSelected, setProductSelected] = useState(null);

  const handleAddCounter = () => {
    setCounter(counter + 1);
  };

  const handleImputChange = (value) => {
    setImputValue(value);
  };

  const handleModal = (item) => {
    setModalVisible(true);
    setItemSelected(item.id);
    setProductSelected(item.name);
  };

  const addItem = () => {
    const newItem = {
      name: imputValue,
      id: new Date().getTime(),
    };
    setCartItems([...cartItems, newItem]);
  };

  const removeItem = () => {
    const filteredArray = cartItems.filter((item) => item.id !== itemSelected);
    setCartItems(filteredArray);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ValidationModal
        title={`Quieres eliminar ${productSelected}?`}
        visible={modalVisible}
        onRemove={removeItem}
        onClose={() => setModalVisible(false)}
      />
      <CartComponent />
      <TextImputComponent
        value={imputValue}
        placeholder={"Ingrese un producto"}
        onChangeText={handleImputChange}
        onButtonPress={addItem}
      />
      <View style={styles.productList}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <ProductItem item={item} handleModal={handleModal} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.productDescription}>
        <View style={styles.productList}>
          <Text style={{ fontSize: 7 }}>
            Último producto ingesado: {imputValue}
          </Text>
        </View>

        <Pressable style={styles.productList} onPress={handleAddCounter}>
          <Text style={{ fontSize: 12 }}>Contador de clicks: </Text>
          <Text style={{ fontSize: 12 }}>{counter}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ededed",
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: Constants.statusBarHeight,
  },
  productList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
});
