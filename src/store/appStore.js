import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { nameLocReducer } from "@/reducers/nameLocReducer";
import { userReducer } from "@/reducers/userReducer";
import { postsReducer } from "@/reducers/postsReducer";
import { photosReducer } from "@/reducers/photosReducer";

export const appStore = configureStore({
    reducer : {nameLocReducer,userReducer,postsReducer,photosReducer},
    middleware : [logger]
})