import {useEffect, useState} from 'react';
import styles from './Jobs.module.css'
import Fillter from '../../components/Fillter';
import {BiSearch} from 'react-icons/bi'
import Ads from '../../components/Ads';
import JobCard from '../../components/JobCard';
import {getAllJobs, JobsList} from '../../firebase/jobs';

function Jobs() {

  const [jobs, setJobs] = useState<JobsList[]>([]);

  useEffect(() => {
    (async function(){
      const jobsArray = await getAllJobs();
      setJobs(jobsArray);
    })()
  }, [])

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
            {
              jobs.map(item => (
                <JobCard
                  title={item.jobs.datas?.title}
                  details={item.jobs.datas?.descJob}
                  desc={`${item.jobs.datas?.time} / Salário: R$ ${item.jobs.datas?.salary} / ${item.jobs.datas?.contract}`}
                  key={item.id}
                />
              ))
            }
          </div>
          <Ads/>
        </div>

    </div>
  )
}

export default Jobs;