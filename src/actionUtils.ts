import { AnyAction } from "redux";

export const createPrefix = (prefix: string) => (actionType: string) =>
  `${prefix}${actionType}`;

export type SecondaryReducer<
  State,
  ActionCreator extends (...args: any[]) => unknown
> = (state: State, action: ReturnType<ActionCreator>) => State;

type Matchable<ActionCreator extends () => AnyAction> = ActionCreator & {
  type: ReturnType<ActionCreator>["type"];
  match(action: AnyAction): action is ReturnType<ActionCreator>;
};

export const withMatcher = <
  ActionCreator extends (...args: any[]) => AnyAction & { type: string }
>(
  actionCreator: ActionCreator
): Matchable<ActionCreator> => {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match: (action: AnyAction): action is ReturnType<ActionCreator> =>
      action.type === type,
  });
};
