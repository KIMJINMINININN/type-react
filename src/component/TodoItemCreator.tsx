import React, {useState} from "react";
import ReactDOM from 'react-dom';
import {useSetRecoilState} from "recoil";
import {todoListState} from "../recoil/store";

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    }

    // @ts-ignore
    return (
        <div>
            <input type="text" value={inputValue} onChange={onchange} />
            <button onClick={addItem}>Add</button>
        </div>
    );
}

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
    return id++;
}

export default TodoItemCreator;
