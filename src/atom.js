import { atom, selector } from "recoil";

export const counterState = atom({
    key: "counter",
    default: 0
})

export const counterLengthState = selector({
    key: 'counterLength', 
    get: ({get}) => {
      const count = get(counterState);
  
      return "your counter is: " + count;
    },
  });