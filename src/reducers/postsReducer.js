import React from 'react'
import { postInit } from '@/utils/init';

export function postsReducer(state=postInit,action) {
    switch(action.type)
    {
        case  "getPosts"   :
            state = {
                ...state,
                posts : action.payload
            }
        break;
    }
    return state;
}
