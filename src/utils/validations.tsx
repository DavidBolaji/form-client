export const isNotEmpty = (value: string) => {
  return value.length > 0;
};

export const isCorrectLength = (rLen: number, pLen: string) => {
  return rLen === pLen.length;
};

export const validatePhone = (rLen: number, pLen: string, field: string) => {
  if (!isNotEmpty(pLen))
    return { status: false, message: field + " is required" };
  if (!isCorrectLength(rLen, pLen))
    return {
      status: false,
      message: field + " cannot be less than " + String(rLen),
    };
  return { status: true, message: "" };
};
