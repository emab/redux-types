import { AnyAction } from "redux";

export const createPrefix = (prefix: string) => (actionType: string) =>
  `${prefix}${actionType}`;

type ActionCreatorFn = (...args: any[]) => AnyAction & { type: string };

export type SecondaryReducer<State, ActionCreator extends ActionCreatorFn> = (
  state: State,
  action: ReturnType<ActionCreator>
) => State;

type Matchable<ActionCreator extends ActionCreatorFn> = ActionCreator & {
  match(action: AnyAction): action is ReturnType<ActionCreator>;
};

export const withMatcher = <ActionCreator extends ActionCreatorFn>(
  actionCreator: ActionCreator
): Matchable<ActionCreator> =>
  Object.assign(actionCreator, {
    match: (action: AnyAction): action is ReturnType<ActionCreator> =>
      action.type === actionCreator().type,
  });
