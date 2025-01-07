# Step 1 Create Project
# Step 2 Add Store Component
# Step 3 Add Redux Tool Kit wrap it.
# Step 4 Create Reducers / Slices
    - const initialState = {
        added products Data Array of Objects.
    }

    - const productSlice = createSlice( {
        name: 'products',
        initialState,
        reducers: {
            addProduct: (state, action) => {
                state.addedProducts.push(action.payload);
            },
            deleteProduct: (state, action) => {
                state.addedProducts = state.addedProducts.filter(product => product.id!== action.payload);
            },
        }
    } )