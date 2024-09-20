import { configureStore } from "@reduxjs/toolkit";

import { AuthSlice } from "./slices/auth";
import { ProveedoresSlice } from "./slices/proveedores";
import { UsuariosSlice } from "./slices/usuarios";

export const store = configureStore({
  reducer: {
    proveedoresState: ProveedoresSlice.reducer,
    usuariosState: UsuariosSlice.reducer,
    authState: AuthSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
