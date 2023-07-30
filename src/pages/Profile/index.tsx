import React from 'react';
import styles from './Profile.module.css';

function Profile() {
  return (
    <>
        <div className={styles.container}>

            <div className={styles.contaierInfoProfile}>
                <img className={styles.imgProfile} src="https://miqueiasbelfort.netlify.app/assets/me.b1ced1ca.jpg" alt="Profile" />
                <div className={styles.infoProfile}>
                    <span className={styles.title}>Miqueias Kawã Sousa Belfort</span>
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