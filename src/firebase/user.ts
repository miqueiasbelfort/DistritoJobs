import {db} from './firebase';
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";


export const addUserInDataBase = async (email: string, user: string, isCompany: boolean) => {
    try {
        await addDoc(collection(db, "users"), {
            email,
            userID: user,
            isCompany,
            name: "",
            aboutMe: "",
            course: "",
            university: ""
        });
    } catch (error) {
        console.log(error);
    }
}

interface Props {
    email: string,
    userID: string,
    fullName: string,
    aboutMe: string,
    course: string,
    isCompany: boolean,
    university: string
}

export const editUser = async (data: Props, id: string) => {
    try {
        await setDoc(doc(db, "users", id), {
            email: data.email,
            userID: data.userID,
            isCompany: data.isCompany,
            name: data.fullName,
            aboutMe: data.aboutMe,
            course: data.course,
            university: data.university
        });
        console.log("Usuario editado");
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getUserByID = async (id: string) => {
    try {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            return docSnap.data().datas;
        } else {
            return {};
        }
    } catch (error) {
        throw error;
    }
}