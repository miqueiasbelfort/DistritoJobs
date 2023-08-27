import { useState, useEffect } from 'react';
import styles from './Profile.module.css';
import {GrFormEdit} from 'react-icons/gr';
import Form from 'react-bootstrap/Form';
import {Tooltip, Modal, Box, Button} from '@mui/material';
import {editUser} from '../../firebase/user';
// import { AppContext } from '../../context/context';
import { DocumentData } from 'firebase/firestore';
import {getUserByLocalstorage} from '../../utils/getUserByLocalstorage';


function Profile() {

    const [openEditProfileModal, setOpenEditProfileModal] = useState(false);
    const [user, setUser] = useState<DocumentData>({});
    const [userID, setUserId] = useState<string>("");
    
    const [fullName, setFullName] = useState("");
    const [aboutMe, setAboutMe] = useState("");
    const [course, setCourse] = useState("");
    const [university, setUnivesity] = useState("");

    const handleEditProfile = async () => {
        const objetctProfile = {
            fullName,
            aboutMe,
            course,
            university
        }
        editUser(objetctProfile, userID);
    }

    useEffect(() => {
        get();
    }, [])

    const get = async () => {
        const data = await getUserByLocalstorage();
        setUser(data.user);
        setUserId(data.id);
        setAboutMe(data.user.aboutMe);
        setFullName(data.user.name);
    }

  return (
    <>
        <div className={styles.container}>

            <div className={styles.contaierInfoProfile}>
                <img className={styles.imgProfile} src="https://miqueiasbelfort.netlify.app/assets/me.b1ced1ca.jpg" alt="Profile" />
                <div className={styles.infoProfile}>
                    <div className={styles.titleContainer}>
                        <span className={styles.title}>{user?.name}</span>
                        <Tooltip title="Editar Perfil">
                            <GrFormEdit onClick={() => setOpenEditProfileModal(true)}/>
                        </Tooltip>
                    </div>
                    <span className={styles.desc}>{user?.aboutMe}</span>
                    {
                        user?.isCompany == false && (
                            <div className={styles.containerButton}>
                                <span>{user?.course} - {user?.university} - {user?.courseStage}</span>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>

        <hr />
        
        <div className={styles.container}>
            <h2>{user?.isCompany ? "Vagas e Concorrentes" : "Curriculo"}</h2>

            <div className={styles.viewPdfCurriculo}>
                    
            </div>

        </div>


        <Modal
            open={openEditProfileModal}
            onClose={() => setOpenEditProfileModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        >
            <Box sx={{width: '500px', backgroundColor: '#fff', padding: '10px', display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <input className={styles.fileModal} type="file" id="btn-file" />
                <label className={styles.btnFile} htmlFor="btn-file">Adicionar Foto</label>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{user?.isCompany ? "Nome da Empresa" : "Nome Completo"}</Form.Label>
                    <Form.Control value={fullName} type="email" placeholder={user?.isCompany ? "Tech JJobs" : "Anna Catariana"} onChange={e => setFullName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Apresentação</Form.Label>
                    <Form.Control as="textarea" rows={3}  style={{resize: 'none'}} onChange={e => setAboutMe(e.target.value)} value={aboutMe}/>
                </Form.Group>
                {
                    user?.isCompany == false && <>
                        <Form.Select aria-label="Default select example" onChange={e => setCourse(e.target.value)}>
                            <option>Qual curso esta fazendo?</option>
                            <option value="Engenharia de Software">Engenharia de Software</option>
                            <option value="Ciência da Computação">Ciência da Computação</option>
                            <option value="ADS">ADS</option>
                        </Form.Select>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nome da Universidade</Form.Label>
                            <Form.Control type="email" placeholder="UNB" onChange={e => setUnivesity(e.target.value)}/>
                        </Form.Group>
                        <input className={styles.fileModal} type="file" id="btn-file" />
                        <label className={styles.btnFile} htmlFor="btn-file">Adicionar Curriculo</label>
                    </>
                }
                <Button variant="outlined" onClick={handleEditProfile}>Confirmar & Editar</Button>
            </Box>
        </Modal>

    </>
  )
}

export default Profile;