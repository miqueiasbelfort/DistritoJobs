import {getUserByIDInDatabase, getUserByID} from '../firebase/user';

export const getUserByLocalstorage = async () => {
    const userId = localStorage.getItem("user");
    const id = await getUserByIDInDatabase(userId);
    const user = await getUserByID(id);
    return {user, id};
}