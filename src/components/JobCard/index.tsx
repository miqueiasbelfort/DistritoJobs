import React from 'react';
import styles from './JobCard.module.css'
import { Link } from 'react-router-dom';

function JobCard() {
  return (
    <div className={styles.container}>
        <img className={styles.imgCompany} src="data:image/png;base64,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" alt="img" />
        <Link className={styles.informationsContainer} to={"/job"}>
            <h4>Engenheiro de Software Junior C#</h4>
            <span>X Corp / Remoto / Até R$ 3.000,00 / CLT / Junior</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sapiente tenetur, sint eius quidem doloremque mollitia dolorem maxime inventore provident deserunt reiciendis ex dignissimos cumque ratione ipsam recusandae aspernatur at?</p>
        </Link>
    </div>
  )
}

export default JobCard;