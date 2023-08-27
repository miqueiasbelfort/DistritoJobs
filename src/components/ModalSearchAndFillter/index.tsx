import React,{useState} from 'react';
import {JobsList} from '../../firebase/jobs';
import {Box, Button} from '@mui/material';
import JobCard from '../JobCard';
import {transformMoney} from '../../utils/money';
import styles from './ModalSearchAndFillter.module.css';

interface Props {
    JobsList: JobsList[];
    search: string
}

const ModalSearchAndFillter = ({JobsList, search}: Props) => {

   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 10; // Quantidade de itens por página
   const totalPages = Math.ceil(JobsList.length / itemsPerPage);
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const currentItems = JobsList.slice(startIndex, endIndex);

   const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box sx={{position: 'absolute' as 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 800, height: 500, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4}}>
        <span>Resutados da pesquisa: <strong>{search}</strong></span>
        <div className={styles.modal}>
            <div className={styles.jobsCards}>
              {
                currentItems.map(item => (
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
            <div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <Button variant="outlined" key={index} onClick={() => goToPage(index + 1)} sx={{height: "25px", marginRight: '5px', borderColor: '#000', color: '#000', '&:hover': { borderColor: '#01d508', color: '#01d508' }}}>
                        {index + 1}
                    </Button>
                ))}
            </div>
        </div>
    </Box>
  )
}

export default ModalSearchAndFillter;