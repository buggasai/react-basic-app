import { init } from "./init";

export const appReducer = (state=init,action) => {
    switch (action.type) {
        case "name_update" :
            state = {
                ...state,
                name : action.payload
            }
            break
            case "loc_update" :
                state = {
                    ...state,
                    loc : action.payload
                }
                break
    }
    return state
}