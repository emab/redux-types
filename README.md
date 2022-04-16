# Redux typed store pattern

This setup does not rely on a union of `Action` types, and instead uses custom action creators which include a `.match()` type predicate function used to resolve the action type.

Code has been copied and adapted from [this blog post](https://phryneas.de/redux-typescript-no-discriminating-union) written by the author of [redux-toolkit](https://github.com/reduxjs/redux-toolkit).

The main concept of this method is using a custom action creator to create all actions. This is done here with `withMatcher()`.

## `withMatcher()`

```ts
type ActionCreatorFn = (...args: any[]) => AnyAction & { type: string };

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
```

This is a slightly modified version from the blog post, only allowing a specific pattern of `withMatcher` usage.

### Usage

The good thing about this method is that there is very little boilerplate code once the types are in place. To create an action, we do this:

```ts
export const myAction = withMatcher((value: string) => ({
    type: "ACTION_TYPE",
    value,
}))
```

Now our reducer can handle this action:

```ts
const reducer = (state: State, action: AnyAction): State => {
    if (myAction.match(action)) {
        // type is correctly inferred here
        return {
            ...state,
            stringValue: action.value
        }
    }
}
```

## `SecondaryReducer`

Since we don't create any specific types for actions, a problem occurs when we try to split out a reducer.

How do we type `action` here without using `AnyAction` or manually defining the type (which wouldn't automatically warn you if you changed the action type!)?

```ts
// We haven't created a type for the action, so we'd have to manually set the type
// Using AnyAction here would mean we don't get the help of the TS server with our typed actions
const myActionReducer = (state: State, action: { value: string }) => ({
    ...state,
    stringValue: action.value,
}) 

const reducer = (state: State, action: AnyAction): State => {
    if (myAction.match(action)) {
        return myActionReducer(state, action);
    }
}
```

To deal with this, the following type can be applied to a function to infer the action type from the creator:

```ts
export type SecondaryReducer<State, ActionCreator extends ActionCreatorFn> = (
    state: State,
    action: ReturnType<ActionCreator>
) => State;
```

### Usage

Here `state` and `action` will be automatically inferred via the generic arguments to StandardReducer:

```ts
const myActionReducer: SecondardReducer<State, typeof myAction> = (state, action) => ({
    ...state,
    stringValue: action.value,
}) 

const reducer = (state: State, action: AnyAction): State => {
    if (myAction.match(action)) {
        return myActionReducer(state, action);
    }
}
```


