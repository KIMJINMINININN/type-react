import {atom, RecoilState, RecoilValueReadOnly, selector} from 'recoil';

export const counterState:RecoilState<number> = atom({
    key: 'counterState',
    default: 0
});

export const todoListState:RecoilState<any[]> = atom({
    key: 'todoListState',
    default : []
})

export const counterLabelSelector:RecoilValueReadOnly<string> = selector({
    key: 'counterLabelSelector',
    get: ({ get }) : string => {
        const counter:number = get(counterState);
        return `현재 카운터는 ${counter} 입니다.`;
    }
})
