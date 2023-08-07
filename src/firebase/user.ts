import {db} from './firebase';
import { collection, addDoc } from "firebase/firestore";

export const addUserInDataBase = async (email: string, user: string, isCompany: boolean) => {
    try {
        await addDoc(collection(db, "users"), {
            email,
            userID: user,
            isCompany,
            name: "",
            desc: "",
            course: "",
            university: ""
        });
    } catch (error) {
        console.log(error);
    }
}