import { StyleSheet, ViewStyle, TextStyle } from "react-native";

// Типизация обьекта стилей для компонента Header
interface IStyles {
  header: ViewStyle;
  title: TextStyle;
}

// Экспорт обьекта стилей
export default StyleSheet.create<IStyles>({
  header: {
    height: 80,
    paddingTop: 40,
    backgroundColor: "coral",
  },

  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
