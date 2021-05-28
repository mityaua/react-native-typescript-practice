import { StyleSheet, ViewStyle, ButtonProps } from "react-native";

// Интерфейс для типизации обьекта стилей
interface IStyles {
  input: ViewStyle;
  button: ButtonProps;
}

// Обьект стилей
export default StyleSheet.create<IStyles>({
  input: {
    marginBottom: 15,
  },
  button: {},
});
