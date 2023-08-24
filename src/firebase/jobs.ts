import {db} from './firebase';
import { collection, addDoc, getDocs, DocumentData, query, doc, getDoc, limit, startAfter, orderBy, endBefore} from "firebase/firestore";

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
        date: getDateFormated()
       });
       return job;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
// ||

// export const getAllJobs = async (limitPage: number, lastDocument: any): Promise<JobsList[]> => {
//     try {
//         let jobsList: JobsList[] = [];

//         const first = query(collection(db, "jobs"));
//         const querySnapshot = await getDocs(first);
//         const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
//         console.log(lastVisible);

//         const next = query(collection(db, "jobs"), orderBy("datas"), startAfter(lastVisible), limit(1));
//         const nextSnapshot = await getDocs(next);
//         nextSnapshot.forEach((doc) => {
//             jobsList.push({id: doc.id, jobs: doc.data()})
//         });

//         return jobsList;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }

export const getAllJobs = async () => {
    try {
        
        let jobsList: JobsList[] = [];

        const q = query(collection(db, "jobs"), orderBy("datas"), limit(2))

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
export const getAllJobsNext =async (lastDocument: any) => {
    try {
        let jobsList: JobsList[] = [];
    
        const last = query(collection(db, "jobs"), orderBy("datas"), limit(2), startAfter(lastDocument))
        const querySnapshot = await getDocs(last);

        // const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
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
    
        const first = query(collection(db, "jobs"), orderBy("datas"), limit(2), endBefore(firstDocument))
        const querySnapshot = await getDocs(first);
        
        querySnapshot.forEach((doc) => {
            jobsList.push({id: doc.id, jobs: doc.data()})
        });
        
        return jobsList;

    } catch (error) {
        throw error;
    }
}

export const getJobById = async (id: string) => {
    try {
        const docRef = doc(db, "jobs", id);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            return docSnap.data().datas;
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