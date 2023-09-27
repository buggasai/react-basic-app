import { photosInit } from '@/utils/init'
import React from 'react'

export function photosReducer(state=photosInit,action) {
   switch(action.type){
        case  "getPhotos" :
            state = {
                ...state,
                photos : action.payload
            }
            break;
   }
   return state;
}
