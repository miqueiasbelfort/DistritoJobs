import React, {useEffect, useState} from 'react';
import styles from './Jobs.module.css'
import Fillter from '../../components/Fillter';
import Ads from '../../components/Ads';
import JobCard from '../../components/JobCard';
import {getAllJobs, JobsList, getAllJobsPrevius, getAllJobsNext, getAllJobsForSeach} from '../../firebase/jobs';
import {transformMoney} from '../../utils/money';
import {Button, Paper, InputBase, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function Jobs() {

  const [jobs, setJobs] = useState<JobsList[]>([]);
  const [lastDocument, setLastDocument] = useState<any>();
  const [firstDocument, setFirstDocument] = useState<any>();
  const [disableNextPage, setDisableNextPage] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [clickNextOnece, setClickNextOnce] = useState(false);

  const [modalJobsWithFillter, setModalJobsWithFillter] = useState(false);

  const [title, setTitle] = useState("");
  const [newArrayJobs, setNewArrayJobs] = useState<JobsList[]>([]);

  useEffect(() => {
    (async function(){
      const {jobsList, lastVisible, firstVisible} = await getAllJobs();
      setLastDocument(lastVisible);
      setFirstDocument(firstVisible);
      setJobs(jobsList);
    })()
  }, [])

  const handleShowNext = async () => {
    const jobs = await getAllJobsNext(lastDocument);
    setFirstDocument(jobs.firstVisible);
    if(clickNextOnece == false){
      setPage(page + 1);
    }
    setClickNextOnce(true);
    setJobs(jobs.jobsList);
  }

  const handleShowPreviues = async () => {
    const jobs = await getAllJobsPrevius(firstDocument);
    setJobs(jobs.jobsList);
    setDisableNextPage(false);
    setClickNextOnce(false);
    setPage(page - 1);
  }

  const handleGetSearchAllJobs = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const jobs = await getAllJobsForSeach({title});
    setNewArrayJobs(jobs.filteredItems);
    setModalJobsWithFillter(true);
    setTitle("");
  }
  
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
          onSubmit={e => handleGetSearchAllJobs(e)}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Qual vaga você está procurando?"
            inputProps={{ 'aria-label': 'Qual vaga você está procurando?' }}
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <IconButton type="button" sx={{ p: '6px' }} aria-label="search">
            <SearchIcon/>
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
                title={item.jobs?.title}
                details={item.jobs?.descJob}
                desc={`${item.jobs?.time} / Salário: R$ ${transformMoney(item.jobs?.salary)} / ${item.jobs?.contract}`}
                key={item.id}
              />
            ))
          }
        </div>
        <Ads/>
      </div>

      <div className="pagination-container-center">
        <div className="pagination-container">
          <Button disabled={page == 0  && true} onClick={handleShowPreviues} variant="outlined" sx={{borderColor: "#131313", color: '#131313', '&:hover': { borderColor: '#01d508', color: "#01d508" }}}>Anterior</Button>
          <Button disabled={disableNextPage} onClick={handleShowNext} variant="outlined" sx={{borderColor: "#131313", color: '#131313', '&:hover': { borderColor: '#01d508', color: "#01d508" }}}>Próximo</Button>
        </div>
      </div>

      <Modal
        open={modalJobsWithFillter}
        onClose={() => setModalJobsWithFillter(!modalJobsWithFillter)}
        
      >
        <Box sx={{position: 'absolute' as 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 750, height: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4}}>
          <div className={styles.modal}>
            <div className={styles.jobsCards}>
              {
                newArrayJobs.map(item => (
                  <JobCard
                    id={item.id}
                    title={item.jobs?.title}
                    details={item.jobs?.descJob}
                    desc={`${item.jobs?.time} / Salário: R$ ${transformMoney(item.jobs?.salary)} / ${item.jobs?.contract}`}
                    key={item.id}
                  />
                ))
              }
            </div>
          </div>
        </Box>
      </Modal>

    </div>
  )
}

export default Jobs;