import { 
  // createAsyncThunk, 
  createSlice, 
  // PayloadAction
} from "@reduxjs/toolkit";
import { RootState } from '@app/Store';

interface iState {
  showMenu: boolean;
  showSearch: boolean;
}

const initialState:iState = {
  showMenu: false,
  showSearch: false,
};

const menuSlice = createSlice({
  name:'Menu',
  initialState: initialState,
  reducers: {
      setShowMenu: (state:iState) => {
          state.showMenu = !state.showMenu;
          state.showSearch = false;
      },
      setShowSearch: (state:iState) => {
        state.showSearch = !state.showSearch;
    }
  },
});

export const { setShowMenu, setShowSearch } = menuSlice.actions;


export default menuSlice.reducer;