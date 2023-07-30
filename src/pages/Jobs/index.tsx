import React from 'react';
import styles from './Jobs.module.css'
import Fillter from '../../components/Fillter';
import {BiSearch} from 'react-icons/bi'
import Ads from '../../components/Ads';
import JobCard from '../../components/JobCard';

function Jobs() {
  return (
    <div className={styles.container}>

        <div className={styles.fillter}>
          <Fillter/>
        </div>

        <form className={styles.inputSearchMasterContainer}>
          <div className={styles.inputContainer}>
            <input className={styles.inputSearch} type="text" placeholder='Pesquisa'/>
            <div className={styles.inputIcon}>
              <BiSearch/>
            </div>
          </div>
        </form>

        <div className={styles.containerJobsAndAds}>
          <Ads/>
          <div className={styles.jobsCards}>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
          </div>
          <Ads/>
        </div>

    </div>
  )
}

export default Jobs;