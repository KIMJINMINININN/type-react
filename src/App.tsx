import React from 'react';
import ReactDOM from 'react-dom';

import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import Counter from "./component/Counter";
import { counterState, counterLabelSelector } from './state/store';

const App = () => {
    const counter = useRecoilValue(counterState);
    const counterLabel = useRecoilValue(counterLabelSelector);

    return (
        <RecoilRoot>
            <Counter />
            <div>counter : {counter}</div>
            <div>counterLabel : {counterLabel}</div>
        </RecoilRoot>
    );
};
ReactDOM.render(<App />, document.getElementById('app'));
