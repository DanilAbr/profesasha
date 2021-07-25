import { createContext, ReactNode, useContext, useReducer } from 'react';
import { ArticleType } from '../components/blog-card/blog-card';

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
type Action = ReturnType<PropertiesType<typeof ActionCreator>>

interface Props {
  children: ReactNode
}

type ArticlesType = [] | ArticleType[];

interface AppState {
  articles: ArticlesType,
}

export interface Context {
  state: AppState,
  dispatch: React.Dispatch<Action>
}

const sharedState: AppState = {
  articles: [],
}

export const AppContext = createContext<Context>({
  state: sharedState,
  dispatch: value => {}
});

const ActionType = {
  SET_ARTICLES: 'SET_ARTICLES'
} as const

export const ActionCreator = {
  setArticles(payload: ArticlesType) {
    return {
      type: ActionType.SET_ARTICLES,
      payload: payload
    } as const
  }
}

function reducer(state: AppState, action: Action) {
  switch ( action.type ) {
    case ActionType.SET_ARTICLES:
      return { articles: action.payload }
    default:
      return state;
  }
}

export function AppWrapper({ children }: Props) {
  const [ state, dispatch ] = useReducer(reducer, sharedState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
