import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { bffServiceApiBase } from "../generated";

const store = configureStore({
    reducer: {
        [bffServiceApiBase.reducerPath]: bffServiceApiBase.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: true,
        serializableCheck: true,
        thunk: {
            extraArgument: {
                baseUrl: "https://localhost:7251/",
            }
        }
    })
        .concat(bffServiceApiBase.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store;
