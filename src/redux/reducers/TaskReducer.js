const defaultState = {
    task: null
}

const TaskReducer = (state=defaultState,action) => {
    switch (action.type) {
      case "INSERT":
        return {
          ...state,
        };
      case "DELETE":
        return {
          ...state,
        };
      case "Check":
        return {
          ...state,
          status: state.status ? false : true,
        };
      case "GET":
        return {
          ...state,
          task: action.payload
        };
      default:
        return state;
    }
}

export default TaskReducer;