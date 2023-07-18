import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './component/TodoList'

import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import Counter from "./component/Counter";
import { counterState, counterLabelSelector } from './recoil/store';

const App = () => {
    const counter:number = useRecoilValue(counterState);
    const counterLabel:string = useRecoilValue(counterLabelSelector);

    return (
        <>
            <TodoList />
            {/*<Counter />*/}
            {/*<div>counter : {counter}</div>*/}
            {/*<div>counterLabel : {counterLabel}</div>*/}
        </>
    );
};
ReactDOM.render(
    <RecoilRoot>
        <App />
    </RecoilRoot>
    , document.getElementById('app'));
