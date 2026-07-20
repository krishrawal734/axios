const STORAGE_KEY = "reduxState";

export const loadState = () => {
  try {
    const state = localStorage.getItem(STORAGE_KEY);

    if (!state) {
      return undefined;
    }

    return JSON.parse(state);
  } catch {
    return undefined;
  }
};

export const saveState = (state: unknown) => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );
  } catch (error) {
    console.error(error);
  }
};