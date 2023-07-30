import { useReducer, ChangeEvent, useState } from "react";
import { initialState, reducer } from "../pages/HandleForm";

const hash: any = {
  id: "Staff Id",
  sex: "Sex",
  phoneNumber: "Phone Number",
  penNumber: "PEN Number",
  LGA: "LGA",
  pfa: "PFA",
};

const useForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [load, setLoad] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleSelectChange = (field: string, value: string): void => {
    dispatch({ type: "CHANGE", field, value });
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    const formatedValue = value.replace(/[^0-9]/g, "");
    dispatch({ type: "CHANGE", field: name, value: formatedValue });
  };

  const handleValidate = (validate: () => boolean, field: string): void => {
    const result = validate();
    if (!result) {
      dispatch({
        type: "ERROR",
        field,
        message: `${hash[field]} is required`,
      });
    }
  };

  const isValid: boolean =
    state.LGAError.length === 0 &&
    state.idError.length === 0 &&
    state.penNumberError.length === 0 &&
    state.pfaError.length === 0 &&
    state.phoneNumberError.length === 0 &&
    state.sexError.length === 0 &&
    state.LGA.length > 0 &&
    state.id.length > 0 &&
    state.penNumber.length > 0 &&
    state.pfa.length > 0 &&
    state.phoneNumber.length > 0 &&
    state.sex.length > 0;

  const handleValidateInput = (
    validate: () => { status: boolean; message: string },
    field: string
  ): void => {
    const result = validate();
    if (!result.status) {
      dispatch({
        type: "ERROR",
        field,
        message: result.message,
      });
    }
  };

  const handleSubmit = async () => {
    setLoad((prev) => !prev);
    const { id, sex, phoneNumber, penNumber, LGA, pfa } = state;
    // http://localhost:5000/api/v1/users/create
    // https://form-5m0m.onrender.com/api/v1/users/create
    fetch("https://form-5m0m.onrender.com/api/v1/users/create", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        id,
        sex,
        phoneNumber,
        penNumber,
        LGA,
        pfa,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoad((prev) => !prev);
        setSuccess(data.message);
      })
      .catch((error) => {
        setLoad((prev) => !prev);
        setError(
          // error?.response?.data.message ??
          error?.response?.statusText ?? "An error occured"
        );
      });
  };

  const closeError = () => setError("");
  const closeSuccess = () => setSuccess("");
  return {
    state,
    handleSelectChange,
    handleValidate,
    handleInputChange,
    handleValidateInput,
    handleSubmit,
    isValid,
    load,
    success,
    error,
    closeError,
    closeSuccess,
  };
};

export default useForm;
