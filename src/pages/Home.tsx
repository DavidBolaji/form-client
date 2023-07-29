import { Select, ConfigProvider, Input, Alert, Result, Button } from "antd";
import React from "react";
import { localGovList, pfaData } from "../data/data";
import { Loading } from "react-loading-dot";
import { isNotEmpty, validatePhone } from "../utils/validations";
import useFetchId from "../hooks/useFetchId";
import useForm from "../hooks/useForm";

interface IForm {
  element: React.ReactNode;
}

const CustomeFormElement: React.FC<IForm> = ({ element }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 4,
        },
      }}
    >
      {element}
    </ConfigProvider>
  );
};

const Home: React.FC = () => {
  const { staffId, loading } = useFetchId();
  const {
    state,
    handleInputChange,
    handleSelectChange,
    handleValidate,
    handleValidateInput,
    isValid,
    handleSubmit,
    load,
    success,
    error,
    closeError,
    closeSuccess,
  } = useForm();

  if (loading || load) {
    return <Loading background="rgba(24, 189, 91, 1)" />;
  }

  return (
    <div className="bg-[#f3f3fe] flex flex-col items-center w-full">
      {success && (
        <Result
          status="success"
          title="Successfully Added User"
          subTitle="User was added to database succesfully"
          extra={[
            <Button key="buy" onClick={closeSuccess}>
              close
            </Button>,
          ]}
        />
      )}
      {error && (
        <Result
          status="error"
          title="Submission Failed"
          subTitle="Please check your internet connection and try again."
          extra={[
            <Button key="buy" onClick={closeError}>
              close
            </Button>,
          ]}
        />
      )}
      <div className="max-w-[752px] md:w-[752px] bg-white form  md:mt-[160px] md:mb-[72px]">
        <div className="flex items-center">
          <h1 className="px-[52px] py-[40px]">LGA CATEGORY ( AASA - AKAN)</h1>
        </div>
        <hr />
        <div className="px-[52px]">
          <div className="mt-[28px] mb-[12px] px-[4px]">
            <label htmlFor="id font-[500]">
              Staff ID - Name
              <span className="text-[#f23a3c] ml-[4px]">*</span>
            </label>
            <CustomeFormElement
              element={
                <Select
                  size="large"
                  className={`${
                    state.idError
                      ? "w-[310px]  hover:ring-2 rounded-md border-2 border-red-400"
                      : "w-[310px]  hover:ring-2 rounded-md"
                  }`}
                  // handleChange.bind(null, extraParameter)
                  onChange={handleSelectChange.bind(null, "id")}
                  onBlur={() =>
                    handleValidate(isNotEmpty.bind(null, state.id), "id")
                  }
                  // value={state.id}
                  placeholder="Please Select"
                  options={staffId}
                />
              }
            />
            {state.idError && (
              <Alert
                type="error"
                message={state.idError}
                className="mt-2 w-[310px]"
                // closable
                showIcon
              />
            )}
          </div>
          <div className="mt-[28px] mb-[12px] px-[4px]">
            <label htmlFor="id font-[500]">
              Sex
              <span className="text-[#f23a3c] ml-[4px]">*</span>
            </label>
            <CustomeFormElement
              element={
                <Select
                  size="large"
                  className={`${
                    state.sexError
                      ? "w-[310px]  hover:ring-2 rounded-md border-2 border-red-400"
                      : "w-[310px]  hover:ring-2 rounded-md"
                  }`}
                  onChange={handleSelectChange.bind(null, "sex")}
                  onBlur={() =>
                    handleValidate(isNotEmpty.bind(null, state.sex), "sex")
                  }
                  placeholder="Please Select"
                  options={[
                    { value: "", label: "Please Select" },
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                />
              }
            />
            {state.sexError && (
              <Alert
                type="error"
                message={state.sexError}
                className="mt-2 w-[310px]"
                // closable
                showIcon
              />
            )}
          </div>
          <div className="mt-[28px] mb-[12px] px-[4px]">
            <label htmlFor="id font-[500]">
              Phone Number
              <span className="text-[#f23a3c] ml-[4px]">*</span>
            </label>
            <CustomeFormElement
              element={
                <Input
                  size="large"
                  className={`${
                    state.phoneNumberError
                      ? "w-[310px]  hover:ring-2 rounded-md border-2 border-red-400"
                      : "w-[310px]  hover:ring-2 rounded-md"
                  }`}
                  value={state.phoneNumber}
                  name="phoneNumber"
                  onChange={handleInputChange}
                  maxLength={11}
                  onBlur={() => {
                    handleValidateInput(
                      validatePhone.bind(
                        null,
                        11,
                        state.phoneNumber,
                        "Phone Number"
                      ),
                      "phoneNumber"
                    );
                  }}
                  // onBlur={() => isCorrectLength(11, state.phoneNumber)}
                  placeholder="00000000000"
                />
              }
            />
            {state.phoneNumberError && (
              <Alert
                type="error"
                message={state.phoneNumberError}
                className="mt-2 w-[310px]"
                // closable
                showIcon
              />
            )}
            <span className="block mt-[11px] text-[0.75em] text-[#464d5f] ml-[2px]">
              Please enter a valid phone number
            </span>
          </div>
          <div className="mt-[28px] mb-[12px] px-[4px]">
            <label htmlFor="id font-[500]">
              PEN Number
              <span className="text-[#f23a3c] ml-[4px]">*</span>
            </label>
            <CustomeFormElement
              element={
                <Input
                  size="large"
                  name="penNumber"
                  value={state.penNumber}
                  className={`${
                    state.penNumberError
                      ? "w-[310px]  hover:ring-2 rounded-md border-2 border-red-400"
                      : "w-[310px]  hover:ring-2 rounded-md"
                  }`}
                  onChange={handleInputChange}
                  maxLength={12}
                  onBlur={() => {
                    handleValidateInput(
                      validatePhone.bind(
                        null,
                        12,
                        state.penNumber,
                        "PEN Number"
                      ),
                      "penNumber"
                    );
                  }}
                  placeholder="000000000000"
                />
              }
            />
            {state.penNumberError && (
              <Alert
                type="error"
                message={state.penNumberError}
                className="mt-2 w-[310px]"
                // closable
                showIcon
              />
            )}
            <span className="block mt-[11px] text-[0.75em] text-[#464d5f] ml-[2px]">
              Please enter your 12 digit PEN
            </span>
          </div>
          <div className="mt-[28px] mb-[12px] px-[4px]">
            <label htmlFor="id font-[500]">
              Present Local Government Area
              <span className="text-[#f23a3c] ml-[4px]">*</span>
            </label>
            <CustomeFormElement
              element={
                <Select
                  size="large"
                  className={`${
                    state.LGAError
                      ? "w-[310px]  hover:ring-2 rounded-md border-2 border-red-400"
                      : "w-[310px]  hover:ring-2 rounded-md"
                  }`}
                  onChange={handleSelectChange.bind(null, "LGA")}
                  onBlur={() =>
                    handleValidate(isNotEmpty.bind(null, state.LGA), "LGA")
                  }
                  placeholder="Please Select"
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option: any) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={localGovList}
                />
              }
            />
            {state.LGAError && (
              <Alert
                type="error"
                message={state.LGAError}
                className="mt-2 w-[310px]"
                // closable
                showIcon
              />
            )}
          </div>
          <div className="mt-[28px] mb-[12px] px-[4px]">
            <label htmlFor="id font-[500]">
              PFA
              <span className="text-[#f23a3c] ml-[4px]">*</span>
            </label>
            <CustomeFormElement
              element={
                <Select
                  size="large"
                  className={`${
                    state.pfaError
                      ? "w-[310px]  hover:ring-2 rounded-md border-2 border-red-400"
                      : "w-[310px]  hover:ring-2 rounded-md"
                  }`}
                  placeholder="Please Select"
                  onChange={handleSelectChange.bind(null, "pfa")}
                  onBlur={() =>
                    handleValidate(isNotEmpty.bind(null, state.pfa), "pfa")
                  }
                  options={pfaData}
                />
              }
            />
            {state.pfaError && (
              <Alert
                type="error"
                message={state.pfaError}
                className="mt-2 w-[310px]"
                // closable
                showIcon
              />
            )}
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-center">
          <div className="py-[40px]">
            <button
              className="bg-[#18bd5b] h-[3em] text-[1em] rounded-[4px] border border-[#18bd5b] text-white w-auto min-w-[180px]"
              style={{
                backgroundColor: !isValid ? "#ededed" : "",
                cursor: !isValid ? "not-allowed" : "",
                border: !isValid ? "1px solid #ededed" : "",
              }}
              onClick={handleSubmit}
              disabled={!isValid}
            >
              Submit
            </button>
          </div>
        </div>
        {/* <Divider /> */}
      </div>
    </div>
  );
};

export default Home;
