const redux = require("redux");
const cretaStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";
const BUY_IceCream = "BUY_IceCream";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
function buyIceCream() {
  return {
    type: BUY_IceCream,
    info: "Ice Cream redux action",
  };
}
// (previousState, action) => newState
const initialState = {
  numOfCakes: 10,
  numOfIceCream: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_IceCream: {
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    }
    default:
      return state;
  }
};

const store = cretaStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
