import React from 'react';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import { useRecoilValue } from 'recoil';
import { ITodoList } from '../../interfaces/todolist';
import { todoListState } from '../../recoil/todo';

const TodoList = () => {
  const todoList = useRecoilValue<any>(todoListState);
  return (
    <>
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};


export default TodoList;