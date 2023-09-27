import { ServerCall } from "@/common/ServerCall"
import { appStore } from "@/store/appStore"

export const photosActions = () =>{
    ServerCall.fnGet("https://jsonplaceholder.typicode.com/photos")
    .then(
        (res) =>{
            appStore.dispatch({
                type : "getPhotos",
                payload : res.data
            })
        }
    )
}