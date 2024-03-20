import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCount = createAsyncThunk('fetchCount', async () => {
    const response = await fetch('http://localhost:3001/count');

    const result = await response.json();

    await new Promise((r) => setTimeout(r, 2000));

    return result.value;
});
export const sendCount = createAsyncThunk('sendCount', async (newCount) => {
    const response = await fetch('http://localhost:3001/count', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: newCount }),
    });

    const result = await response.json();

    await new Promise((r) => setTimeout(r, 2000));

    return result.value;
});

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        isLoading: false,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        decrementBy: (state, action) => {
            state.value -= action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCount.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchCount.fulfilled, (state, action) => {
                state.value = action.payload;
                state.isLoading = false;
            })
            .addCase(sendCount.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(sendCount.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(sendCount.rejected, (state, action) => {
                console.log('action', action);

                state.errorMessage = action.error.message;
                state.isLoading = false;
            });
    },
    selectors: {
        selectCount: (sliceState) => sliceState.value,
        selectIsLoading: (sliceState) => sliceState.isLoading,
    },
});

export const { increment, decrement, decrementBy } = counterSlice.actions;

export const { selectCount, selectIsLoading } = counterSlice.selectors;
