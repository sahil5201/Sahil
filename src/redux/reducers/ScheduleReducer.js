const defaultState = {
    name : "Sahil",
    count: 1,
    status : true,
    task: null
}

const ScheduleReducer = (state=defaultState,action) => {
    switch (action.type) {
        case "INSERT":
          return {
            ...state,
            name: "ABC",
            count: state.count + 1,
          };
        case "DELETE":
          return {
            ...state,
            name: "SAHIL",
            count: state.count - 1,
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

export default ScheduleReducer
