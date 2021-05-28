// Импорт компонентов, View вместо <header> и Text вместо <p>, так как в Native нет классических тегов
import React from "react";
import { View, Text } from "react-native";

import styles from "./HeaderStyle";

// Компонент хедера (атрибут стилей именуется как style!)
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};

export default Header;
