import { VFC } from "react";
import { TodoType } from "./types/todo";

// Omit : 省略するpropsを指定
// Pick : 使用したいpropsを指定

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
