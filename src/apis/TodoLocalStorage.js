function createTodo(todo, checked) {
  this.todo = todo;
  this.checked = checked;
}
function createLocalStorage(key) {
  let data=[]
  localStorage.setItem(key, JSON.stringify(data));
}
function getLocalStorageData(key) {
  if (localStorage.getItem(key) !== null) {
    const localData = localStorage.getItem(key);

    return JSON.parse(localData);
  }
}
function addLocalStorageData(key, data) {
  let getItems = [];
  if (localStorage.getItem(key) === ``) {
    getItems.push(data);
    localStorage.setItem(key, JSON.stringify(getItems));
  } else {
    getItems = JSON.parse(localStorage.getItem(key));
    getItems.push(data);
    localStorage.setItem(key, JSON.stringify(getItems));
  }
}
export {
  createTodo,
  createLocalStorage,
  getLocalStorageData,
  addLocalStorageData,
};
