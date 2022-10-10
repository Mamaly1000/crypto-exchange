export const getIndex=(state , string)=>{

const Index=state.findIndex(coin=>coin.name===string)
return state[Index]

} 