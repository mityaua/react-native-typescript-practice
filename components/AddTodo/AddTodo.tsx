import React, { useState } from "react";

import { View, TextInput, Button } from "react-native";

// Типизация пропсов AddTodo
interface IProps {
  addHandler: (value: string) => void;
}

// Компонент добавления Тудушки
const AddTodo = ({ addHandler }: IProps) => {
  const [value, setValue] = useState<string>("");

  // Наблюдает за инпутом (onChangeText)
  const inputHandler = (text: string) => {
    setValue(text);
  };

  // Добавляет тудушку (onPress)
  const addItem = () => {
    addHandler(value);
    setValue("");
  };

  return (
    <View>
      <TextInput placeholder="new todo..." value={value} onChangeText={inputHandler} />

      <Button title="Add todo" onPress={addItem} color="coral" />
    </View>
  );
};

export default AddTodo;
