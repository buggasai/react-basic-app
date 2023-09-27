import { ServerCall } from "@/common/ServerCall"
import { appStore } from "@/store/appStore"

export const userAction = () => {
     ServerCall.fnGet("https://jsonplaceholder.typicode.com/users")
     .then(
        (res)=> {
            appStore.dispatch({
                type : "getUsers",
                payload : res.data
            })
     })
     .catch(
        (res) => {
            console.log(res)
        }
     )

}