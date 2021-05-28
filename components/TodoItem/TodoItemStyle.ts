import { StyleSheet, TextStyle } from "react-native";

// Интерфейс для типизации обьекта стилей
interface IStyles {
  item: TextStyle;
}

// Обьект стилей
export default StyleSheet.create<IStyles>({
  item: {
    padding: 16,
    margin: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },
});
