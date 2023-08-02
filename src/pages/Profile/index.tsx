import React from 'react';
import styles from './Profile.module.css';
import {GrFormEdit} from 'react-icons/gr'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Profile() {

    const renderTooltip = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
          Editar Perfil
        </Tooltip>
    );

  return (
    <>
        <div className={styles.container}>

            <div className={styles.contaierInfoProfile}>
                <img className={styles.imgProfile} src="https://miqueiasbelfort.netlify.app/assets/me.b1ced1ca.jpg" alt="Profile" />
                <div className={styles.infoProfile}>
                    <div className={styles.titleContainer}>
                        <span className={styles.title}>Miqueias Kawã Sousa Belfort</span>
                        <OverlayTrigger
                            placement={'top'}
                            overlay={
                              <Tooltip id={`tooltip-top`}>
                                Editar Perfil
                              </Tooltip>
                            }
                        >
                            <GrFormEdit/>
                        </OverlayTrigger>
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

    </>
  )
}

export default Profile;