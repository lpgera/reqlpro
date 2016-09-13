// const {ipcRenderer} = require('electron');
import {
  setState,
  setConnections,
  setConnection,
  setEmail,
  addConnection,
  showConnectionForm,
  hideConnectionForm
} from './core';

export default function reducer(state = {}, action) {
  console.log("-----------------------")
  console.log("REDUCER: action", action)
  console.log("-----------------------")
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'SET_CONNECTIONS':
      return setConnections(state, action.connections);
    case 'SET_CONNECTION':
      return setConnection(state, action.connection);
    case 'SET_EMAIL':
      return setEmail(state, action.email);
    case 'ADD_CONNECTION':
      // ipcRenderer.send('writeConfigFile', state.userConfig);
      return hideConnectionForm(addConnection(state, action.connection));
    case 'SHOW_CONNECTION_FORM':
      return showConnectionForm(state, action.mode);
    case 'HIDE_CONNECTION_FORM':
      return hideConnectionForm(state);
  }
  return state;
}
