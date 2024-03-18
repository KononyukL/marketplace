/* eslint-disable */
export const jsonParser = <TJson>(json: string): TJson | null => {
  if (!json) {
    return null;
  }

  try {
    return JSON.parse(json) as TJson;
  } catch (e) {
    return null;
  }
};

export const readJWTData = <TData>(jwt?: string): TData | undefined => {
  if (!jwt) return;

  try {
    const encodedDataParts = jwt.split(".");
    if (encodedDataParts.length !== 3) {
      return;
    }
    const encodedData = encodedDataParts[1];
    const decoded = window.atob(encodedData);
    return jsonParser<TData>(decoded) || undefined;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      console.error(e);
    }
  }
};

export const parseParams = (params: any) => {
  const keys = Object.keys(params);
  let options = "";

  keys.forEach((key) => {
    const isParamTypeObject = typeof params[key] === "object";
    const isParamTypeArray = isParamTypeObject && params[key].length >= 0;

    if (!isParamTypeObject) {
      options += `${key}=${params[key]}&`;
    }

    if (isParamTypeObject && isParamTypeArray) {
      params[key].forEach((element: any) => {
        options += `${key}=${element}&`;
      });
    }
  });

  return options ? options.slice(0, -1) : options;
};
