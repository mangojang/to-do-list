import { action, makeObservable, observable } from "mobx";

export default class userStore {
    user = {
        loggedIn: false
    };
    constructor(){
        makeObservable(this,{
            user: observable,
            setLoggedIn: action
        })
    }

    setLoggedIn(data){
        this.user.loggedIn = data
    }

}