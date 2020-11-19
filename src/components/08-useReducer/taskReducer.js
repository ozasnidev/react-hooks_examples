export const taskReducer = ( state = [], action ) => {
    switch(action.type){
        case 'add': return [...state, action.payload];

        default: return state;
    }
} 