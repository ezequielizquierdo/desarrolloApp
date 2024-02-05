import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
} from "react-native";

export const ProductItem = ({ item, handleModal }) => {
    return (
        <View data-testId={"itemBox"} style={styles.itemBox}>
            <Text style={styles.product}>{item.name}</Text>
            <Pressable onPress={() => handleModal(item)}>
                <View style={styles.imageBox}>
                    <Image
                        style={styles.imageFormat}
                        source={{
                            uri: "https://cdn.iconscout.com/icon/free/png-256/free-delete-2902143-2411575.png",
                        }}
                    />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    itemBox: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "lightgray",
    },
    product: { fontSize: 16, fontWeight: "bold", padding: 4 },
    imageBox: {
        fontSize: 30, justifyContent: "center"
    },
    imageFormat: {
        width: 20, height: 20
    }
});