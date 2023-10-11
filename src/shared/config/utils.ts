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
    // eslint-disable-next-line no-console
    console.error(e);
  }
};
