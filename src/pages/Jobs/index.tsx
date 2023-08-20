import {useEffect, useState} from 'react';
import styles from './Jobs.module.css'
import Fillter from '../../components/Fillter';
import Ads from '../../components/Ads';
import JobCard from '../../components/JobCard';
import {getAllJobs, JobsList} from '../../firebase/jobs';
import {transformMoney} from '../../utils/money'
import {Button, Paper, InputBase, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Jobs() {

  const [jobs, setJobs] = useState<JobsList[]>([]);

  useEffect(() => {
    (async function(){
      const jobsArray = await getAllJobs(10, 10);
      setJobs(jobsArray);
    })()
  }, [])

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Qual vaga você está procurando?"
            inputProps={{ 'aria-label': 'Qual vaga você está procurando?' }}
          />
          <IconButton type="button" sx={{ p: '6px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <div className={styles.fillter}>
          <Fillter/>
        </div>
      </div>

      <div className={styles.containerJobsAndAds}>
        <Ads/>
        <div className={styles.jobsCards}>
          {
            jobs.map(item => (
              <JobCard
                id={item.id}
                title={item.jobs.datas?.title}
                details={item.jobs.datas?.descJob}
                desc={`${item.jobs.datas?.time} / Salário: R$ ${transformMoney(item.jobs.datas?.salary)} / ${item.jobs.datas?.contract}`}
                key={item.id}
              />
            ))
          }
        </div>
        <Ads/>
      </div>

      <div className="pagination-container">
        <Button variant="outlined" sx={{borderColor: "#131313", color: '#131313', '&:hover': { borderColor: '#B30040', color: "#B30040" }}}>Anterior</Button>
        <Button variant="outlined" sx={{borderColor: "#131313", color: '#131313', '&:hover': { borderColor: '#B30040', color: "#B30040" }}}>Próximo</Button>
      </div>

    </div>
  )
}

export default Jobs;