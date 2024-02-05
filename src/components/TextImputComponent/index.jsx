import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
} from "react-native";

export const TextImputComponent = ({ placeholder, value, onChangeText, onButtonPress }) => {
    return (
        <View style={styles.textImputBox}>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.textImput}
                placeholder={placeholder}
            />
            <Pressable onPress={onButtonPress}>
                <Text style={styles.addButton}>+</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    textImput: {
        borderColor: "gray",
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: "90%",
    },
    addButton: {
        fontSize: 40
    },
    textImputBox: {
        flexDirection: "row"
    }
});