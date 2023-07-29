interface State {
  id: string;
  sex: string;
  phoneNumber: string;
  penNumber: string;
  LGA: string;
  pfa: string;
  idError: string;
  sexError: string;
  phoneNumberError: string;
  penNumberError: string;
  LGAError: string;
  pfaError: string;
}

type ActionType =
  | { type: "CHANGE"; field: string; value: string }
  | { type: "ERROR"; field: string; message: string };

export const initialState: State = {
  id: "",
  sex: "",
  phoneNumber: "",
  penNumber: "",
  LGA: "",
  pfa: "",
  idError: "",
  sexError: "",
  phoneNumberError: "",
  penNumberError: "",
  LGAError: "",
  pfaError: "",
};

export const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.field]: action.value,
        [`${action.field}Error`]: "",
      };
    case "ERROR":
      return {
        ...state,
        [`${action.field}Error`]: action.message,
      };
    default:
      return state;
  }
};
