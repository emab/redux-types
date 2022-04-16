import { createPrefix, withMatcher } from "../../utils/actionUtils";

const withPrefix = createPrefix("CAT_");

export const setCurrentFactAction = withMatcher((fact: string) => ({
  type: withPrefix("SET_CURRENT_FACT"),
  fact,
}));

export const clearCatFactAction = withMatcher(() => ({
  type: withPrefix("CLEAR_FACT"),
}));
