import { fork, all } from 'redux-saga/effects';
import {
  watchSaveSector,
  watchRequestSectors,
  watchRequestSector,
  watchUpdateSector,
  watchUpdateSectorOrder,
  watchSaveTask,
} from './watchers';

export default function* root() {
  yield all([
    fork(watchSaveSector),
    fork(watchRequestSectors),
    fork(watchRequestSector),
    fork(watchUpdateSector),
    fork(watchUpdateSectorOrder),
    fork(watchSaveTask),
  ]);
}
