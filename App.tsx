import React, { useState } from "react";
// StyleSheet для создания обьекта стилей
// View, Text, FlatList - компонет обёртка, внутренний компонент, FlatList - для работы со списками
// ViewStyle - для типизации стилей от разработчиков Native
import { StyleSheet, Text, View, ViewStyle, FlatList } from "react-native";
import Header from "./components/Header/Header";
import TodoItem from "./components/TodoItem/TodoItem";
import AddTodo from "./components/AddTodo/AddTodo";

import { ITodo } from "./interfaces"; // Импорт интерфейса одного тудушки

import todos from "./data.json"; // Импорт массива тудушек

// Главный компонент приложения
export default function App() {
  const [list, setList] = useState<ITodo[]>(todos); // Типизация массива тудушек в стейте

  const addHandler = (text: string) => {
    if (!text) return;

    const item: ITodo = {
      id: list.length + 1,
      text,
    };

    setList((prev) => [item, ...prev]);
  };

  // Функция для удаления тудушки по id + типизация параметра
  const deleteHandler = (id: number): void => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo addHandler={addHandler} />

        <View style={styles.list}>
          <FlatList
            data={list}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TodoItem item={item} deleteHandler={deleteHandler} />}
          />
        </View>
      </View>
    </View>
  );
}

// Типизация обьекта стилей App
interface IStyles {
  container: ViewStyle;
  content: ViewStyle;
  list: ViewStyle;
}

// Обьект стилей
const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
