export default function PageReducerContext(pageState, action) {
  switch (action.type) {
    case "Work": {
      const newState = { work: true, contact: false };
      return newState;
    }
    case "Contact": {
      const newState = { work: false, contact: true };
      return newState;
    }
    default:
      throw new Error("The action is unhandled" + action.type);
  }
}
