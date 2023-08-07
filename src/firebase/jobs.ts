import {db} from './firebase';
import { collection, addDoc } from "firebase/firestore";

interface Job {
    title: string,
    salary: number,
    contract: string,
    mainLang: string,
    time: string,
    companyAddress: string,
    descJob: string,
    activityJob: string,
    langsJob: string[],
    benefits: string,
}

export const publishJob = async (datas: Job) => {
    try {
       const job = await addDoc(collection(db, "jobs"), {
        datas,
        date: new Date()
       });
       return job;
    } catch (error) {
        console.log(error);
    }
}