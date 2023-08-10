import { useState, useContext } from 'react';
import styles from './Profile.module.css';
import {GrFormEdit} from 'react-icons/gr'
import Tooltip from '@mui/material/Tooltip';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import {editUser} from '../../firebase/user';
import { AppContext } from '../../context/context';

function Profile() {

    const {userId, email, isCompany} = useContext(AppContext);

    const [ openEditProfileModal, setOpenEditProfileModal ] = useState(false);
    
    const [fullName, setFullName] = useState("");
    const [aboutMe, setAboutMe] = useState("");
    const [course, setCourse] = useState("");
    const [university, setUnivesity] = useState("");

    const handleEditProfile = async () => {
        const objetctProfile = {
            email,
            userID: userId,
            isCompany,
            fullName,
            aboutMe,
            course,
            university
        }
        editUser(objetctProfile, "BD3kAmZryMGkQG5MKmDl");
    }

  return (
    <>
        <div className={styles.container}>

            <div className={styles.contaierInfoProfile}>
                <img className={styles.imgProfile} src="https://miqueiasbelfort.netlify.app/assets/me.b1ced1ca.jpg" alt="Profile" />
                <div className={styles.infoProfile}>
                    <div className={styles.titleContainer}>
                        <span className={styles.title}>{userId}</span>
                        <Tooltip title="Editar Perfil">
                            <GrFormEdit onClick={() => setOpenEditProfileModal(true)}/>
                        </Tooltip>
                    </div>
                    <span className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perspiciatis hic velit soluta dolores quae qui vero, eius sapiente, explicabo iusto eveniet unde nobis! Neque quidem enim minus officiis ipsam.</span>
                    <div className={styles.containerButton}>
                        <span>Engenharia de Software - IESB - Cursando</span>
                    </div>
                </div>
            </div>

        </div>

        <hr />
        
        <div className={styles.container}>
            <h2>Curriculo</h2>

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
                <label className={styles.btnFile} htmlFor="btn-file">Adicionar Foto de Perfil</label>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control type="email" placeholder="Anna Catarina" onChange={e => setFullName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descrição sobre você</Form.Label>
                    <Form.Control as="textarea" rows={3}  style={{resize: 'none'}} onChange={e => setAboutMe(e.target.value)}/>
                </Form.Group>
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
                <Button variant="outlined" onClick={handleEditProfile}>Confirmar & Editar</Button>
            </Box>
        </Modal>

    </>
  )
}

export default Profile;