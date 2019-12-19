import { makeAsyncEpic } from "redux-toolbelt-observable";
import * as actions from "../actions";
import * as api from "../../api";
import { ofType } from "redux-observable";
import { switchMap } from "rxjs/operators"

export const fetchDrivers = makeAsyncEpic(actions.fetchDrivers, api.fetchDrivers);

export const onInit = (action$, store) => {
    return action$.pipe(
        ofType(actions.init.TYPE),
        switchMap(() => [actions.fetchDrivers()])
    )
}