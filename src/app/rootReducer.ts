import { combineReducers } from "redux";

import menuReducer from '@views/components/Layout/components/Menu/common/redux/Menu.slice';


const rootReducer = combineReducers({
  appTools: combineReducers({
    menuWizard: menuReducer
  })
});


export default rootReducer;