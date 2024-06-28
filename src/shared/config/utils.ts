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
      params[key].forEach((element: any, index: number, arr: any[]) => {
        if (!index) {
          options += `${key}=${element}`;
        } else {
          options += `,${element}`;
        }

        if (arr.length - 1 === index) {
          options += `&`;
        }
      });
    }
  });

  return options ? options.slice(0, -1) : options;
};

type caseTypes = "snakeCase" | "camelCase";

export const getSnakeCase = (text?: string): string =>
  text
    ? text
        .split(/(?=[A-Z])/)
        .join("_")
        .toLowerCase()
    : "";
export const getCamelCase = (text?: string): string =>
  text
    ? text
        .toLowerCase()
        .replace(/([-_][a-z])/g, (group) =>
          group.toUpperCase().replace("_", ""),
        )
    : "";

export const convertCases = <T>(
  type: caseTypes,
  data = {},
): Record<string, T> => {
  const updated = Object.entries(data).map(([key, value]) => {
    const updatedKey =
      type === "snakeCase" ? getSnakeCase(key) : getCamelCase(key);
    if (Array.isArray(value) && value[0] instanceof Object) {
      return [updatedKey, value.map((item) => convertCases(type, item))];
    }
    if (value instanceof Object && !Array.isArray(value)) {
      return [updatedKey, convertCases(type, value)];
    }
    return [updatedKey, value];
  });
  return Object.fromEntries(updated);
};
