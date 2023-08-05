import React, { useState } from 'react';
import styles from './Profile.module.css';
import {GrFormEdit} from 'react-icons/gr'
import Tooltip from '@mui/material/Tooltip';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';

function Profile() {

    const [ openEditProfileModal, setOpenEditProfileModal ] = useState(false);

  return (
    <>
        <div className={styles.container}>

            <div className={styles.contaierInfoProfile}>
                <img className={styles.imgProfile} src="https://miqueiasbelfort.netlify.app/assets/me.b1ced1ca.jpg" alt="Profile" />
                <div className={styles.infoProfile}>
                    <div className={styles.titleContainer}>
                        <span className={styles.title}>Miqueias Kawã Sousa Belfort</span>
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
                    <Form.Control type="email" placeholder="Anna Catarina" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descrição sobre você</Form.Label>
                    <Form.Control as="textarea" rows={3}  style={{resize: 'none'}}/>
                </Form.Group>
                <Form.Select aria-label="Default select example">
                    <option>Qual curso esta fazendo?</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nome da Universidade</Form.Label>
                    <Form.Control type="email" placeholder="UNB" />
                </Form.Group>
                <input className={styles.fileModal} type="file" id="btn-file" />
                <label className={styles.btnFile} htmlFor="btn-file">Adicionar Curriculo</label>
                <Button variant="outlined">Confirmar & Editar</Button>
            </Box>
        </Modal>

    </>
  )
}

export default Profile;