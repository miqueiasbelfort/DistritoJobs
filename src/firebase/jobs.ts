import {db} from './firebase';
import { collection, addDoc, getDocs, DocumentData, query} from "firebase/firestore";

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

export interface JobsList {
    id: string,
    jobs: DocumentData
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
// ||

export const getAllJobs = async (): Promise<JobsList[]> => {
    try {
        let jobsList: JobsList[] = [];

        const q = query(collection(db, "jobs"));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            jobsList.push({id: doc.id, jobs: doc.data()})
        });
        
        console.log(jobsList)
        return jobsList;
    } catch (error) {
        console.log(error);
        throw error;
    }
}