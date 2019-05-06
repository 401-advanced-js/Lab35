let initialState = {
  players: [],
  teams: []
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  console.log(payload);

  switch (type) {
    case "GET":
      return { ...state.players, ...state.teams };

    case "POST":
      return { players: [...state.players, payload], ...state.teams };

    case "DELETE":
      let deleteList = state[model].filter((r, idx) => idx !== id);
      return { ...state, [model]: deleteList };

    case "PUT":
      let putList = state[model].map((entry, idx) =>
        idx === id ? record : entry
      );
      return { ...state, [model]: putList };

    case "PATCH":
      return state;

    default:
      return state;
  }
};
