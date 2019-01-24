export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: Date.now(),
        text
    };
};
