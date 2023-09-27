import { userInit } from "@/utils/init"

export const userReducer = (state = userInit,action) => {
    switch(action.type) {
        case "getUsers" :
            state = {
                ...state,
                users : action.payload
            }
            break;
    }
    return state;
}