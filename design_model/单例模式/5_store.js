/**
 * @description eg：store --- 对象（单例）
 */

function createStore(reducer) {
  let state;
  let listeners = [];
  function getState() {
    return state;
  }
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((l) => l());
  }
  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((item) => item !== listener);
    };
  }
  return {
    getState,
    dispatch,
    subscribe,
  };
}

let store = createStore();
