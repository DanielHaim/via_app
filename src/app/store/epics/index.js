import {combineEpics} from 'redux-observable';
import * as epics from './common';
import { values } from "lodash"

export const rootEpics = combineEpics(
    ...values(epics)
);