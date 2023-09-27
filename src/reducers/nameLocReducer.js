
import React from 'react'
import { nameLocInit } from '@/utils/init'

export function nameLocReducer(state=nameLocInit,action) {
   switch(action.type){
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
   return state;
}
