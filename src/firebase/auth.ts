import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import {addUserInDataBase} from './user'

export const createUser = async (email: string, password: string, secondPassword: string, isCompany: boolean) => {
    
    if(password !== secondPassword){
        console.log("Senhas incorretas!");
        return;
    }

    const user = createUserWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
            addUserInDataBase(email, userCredentials.user.uid, isCompany);
            return userCredentials.user;
        }
    ).catch( err => {
        const errorMessage = err.message;
        console.log(errorMessage);
    })

    return user;
};

export const loginUser = (email: string, password: string) => {
    const user = signInWithEmailAndPassword(auth, email, password).then(userCredentials => userCredentials.user).catch(
        err => {
            const errorMessage = err.message;
            console.log(errorMessage);
        }
    )
    return user;
}