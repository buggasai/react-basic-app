import { ServerCall } from "@/common/ServerCall"
import { appStore } from "@/store/appStore"

export const postAction = async(dispatch)=>{
    const res = await ServerCall.fnGet("https://jsonplaceholder.typicode.com/posts")
    // appStore.dispatch({
    //     type : "getPosts",
    //     payload : res.data
    // })
    dispatch({
        type : "getPosts",
        payload : res.data
    })
}