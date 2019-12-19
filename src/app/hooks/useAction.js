import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'


// https://react-redux.js.org/next/api/hooks#recipe-useactions
export function useActions(actions, deps) {
  const dispatch = useDispatch()
  deps = deps ? deps : [];
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    }, [actions, dispatch, ...deps]);
}