const LOCAL_STORAGE_KEY = "todos";

export const useLocalStorage = () => {
    let todos = [];

    if (!isEmpty()) {
        todos = Array.from(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
    }

    function setTodoToLocalStorage(text) {
        let newTodoList = [text];

        if (!isEmpty()) {
            newTodoList = [
                ...JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)),
                text,
            ];
            console.log(newTodoList);
        }
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodoList));
    }

    function isEmpty() {
        if (localStorage.getItem(LOCAL_STORAGE_KEY)) return false;

        return true;
    }

    return { todos, setTodoToLocalStorage };
};
