import {db} from './firebase';
import { collection, addDoc, getDocs, DocumentData, query, doc, getDoc, limit, startAfter, orderBy, endBefore, where} from "firebase/firestore";

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
    date?: string
}

export interface JobsList {
    id: string,
    jobs: DocumentData
}

interface Search {
    title: string | null;
}

export const publishJob = async ({title, salary, contract, mainLang, time, companyAddress, descJob, activityJob, langsJob, benefits}: Job) => {
    try {
       const job = await addDoc(collection(db, "jobs"), {
        title,
        salary,
        contract,
        mainLang,
        time,
        companyAddress,
        descJob,
        activityJob,
        langsJob,
        benefits,
        date: getDateFormated()
       });
       return job;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
// ||

export const getAllJobs = async () => {
    try {
        
        let jobsList: JobsList[] = [];

        const q = query(collection(db, "jobs"), orderBy("title"), limit(3));

        const querySnapshot = await getDocs(q);

        const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        const firstVisible = querySnapshot.docs[0];
      
        querySnapshot.forEach((doc) => {
            jobsList.push({id: doc.id, jobs: doc.data()})
        });

        return {jobsList, lastVisible, firstVisible};

    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const getAllJobsForSeach = async ({title}: Search) => {
    try {
        
        let jobsList: JobsList[] = [];

        const q = query(collection(db, "jobs"), orderBy("title"));

        const querySnapshot = await getDocs(q);

        const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        const firstVisible = querySnapshot.docs[0];
      
        querySnapshot.forEach((doc) => {
            jobsList.push({id: doc.id, jobs: doc.data()})
        });

        const titleInLowerCase = title?.toLocaleLowerCase();
        const filteredItems = jobsList.filter(item => item.jobs.title.toLowerCase().includes(titleInLowerCase));
        
        return {filteredItems, lastVisible, firstVisible};

    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const getAllJobsNext =async (lastDocument: any) => {
    try {
        let jobsList: JobsList[] = [];
    
        const last = query(collection(db, "jobs"), orderBy("title"), limit(3), startAfter(lastDocument))
        const querySnapshot = await getDocs(last);
        
        const firstVisible = querySnapshot.docs[0];
    
        querySnapshot.forEach((doc) => {
            jobsList.push({id: doc.id, jobs: doc.data()})
        });

    
        return {jobsList, firstVisible};

    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const getAllJobsPrevius =async (firstDocument: any) => {
    try {
        let jobsList: JobsList[] = [];
    
        const first = query(collection(db, "jobs"), orderBy("title"), limit(3), endBefore(firstDocument))
        const querySnapshot = await getDocs(first);
        
        querySnapshot.forEach((doc) => {
            jobsList.push({id: doc.id, jobs: doc.data()})
        });

        return {jobsList}

    } catch (error) {
        throw error;
    }
}


export const getJobById = async (id: string) => {
    try {
        const docRef = doc(db, "jobs", id);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            return docSnap.data();
        } else {
            return {};
        }

    } catch (error) {
        console.log(error);
        throw error;
    }
}


const getDateFormated = (): string => {
    const date = new Date();
    const zeroInFrontDay = date.getDate() < 10 ? "0"  : "";
    const zeroInFrontMonth = date.getMonth() + 1 < 10 ? "0" : "";
    const zeroInFrontMinutes = date.getMinutes() < 10 ? "0" : "";
    const zeroInFrontHuors = date.getHours() < 10 ? "0" : "";
    const formatedDate = `${zeroInFrontDay}${date.getDate()}/${zeroInFrontMonth}${date.getMonth() + 1}/${date.getFullYear()} as ${zeroInFrontHuors}${date.getHours()}:${zeroInFrontMinutes}${date.getMinutes()}`;
    return formatedDate;
}