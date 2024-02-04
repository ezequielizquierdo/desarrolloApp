import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import { ValidationModal } from "./src/components/ValidationModal";

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

  const handleAddCounter = () => {
    setCounter(counter + 1);
  };

  const handleImputChange = (value) => {
    setImputValue(value);
  };

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
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
        title={"Quieres eliminar el producto?"}
        visible={modalVisible}
        onRemove={removeItem}
        onClose={() => setModalVisible(false)}
      />
      <View style={styles.cartContainer}>
        <Text>CARRITO</Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
          }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          value={imputValue}
          onChangeText={handleImputChange}
          style={styles.textImput}
          placeholder="Ingrese un producto"
        />
        <Pressable onPress={addItem}>
          <Text style={{ fontSize: 40 }}>+</Text>
        </Pressable>
      </View>

      <View style={styles.productList}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View data-testId={"itemBox"} style={styles.itemBox}>
              <Text style={styles.product}>{item.name}</Text>
              <Pressable onPress={() => handleModal(item.id)}>
                <Text style={{ fontSize: 30, justifyContent: "center" }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={{
                      uri: "https://cdn.iconscout.com/icon/free/png-256/free-delete-2902143-2411575.png",
                    }}
                  ></Image>
                </Text>
              </Pressable>
            </View>
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
  product: { fontSize: 16, fontWeight: "bold", padding: 4 },
  productList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  cartContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
  },
  textImput: {
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "90%",
  },
  itemBox: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "lightgray",
  },
});
