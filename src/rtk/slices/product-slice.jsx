import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk("productesSlice/fetchProducts", async ()=> {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
})
export const productesSlice = createSlice({
  name: 'productesSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState : [],
  reducers: {
  },
  extraReducers : (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state , action) => {
        return action.payload;
    })
  },
});

// export const {} = productesSlice.actions;

export default productesSlice.reducer;