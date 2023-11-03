export function helperUpdate(state, id, todoEdited) {
    for (let i = 0; i < state.length; i++) {
        if (state[i].id === id) {
            state[i].todo = todoEdited;
            break;
        }
    }
}