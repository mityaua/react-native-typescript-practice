import React from "react";
// Rомпонент для тача/клика (li) + внутренний компонент (p)
import { TouchableOpacity, Text } from "react-native";

import { ITodo } from "../../interfaces/index"; // Импорт интерфейса одного тудушки

import styles from "./TodoItemStyle";

// Типизация пропсов компонента на основе интерфейса одной тудушки из папки interfaces
interface IProps {
  item: ITodo;
  deleteHandler: (id: number) => void;
}

// Компонент одной тудушки
const TodoItem = ({ item, deleteHandler }: IProps) => {
  return (
    <TouchableOpacity onPress={() => deleteHandler(item.id)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;
