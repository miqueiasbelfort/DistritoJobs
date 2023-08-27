import {useState} from 'react';
import styles from './PublishJob.module.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import { langs } from '../../utils/langs';
import {publishJob} from '../../firebase/jobs';

function PublishJob() {

  const [title,setTitle] = useState("");
  const [salary, setSalary] = useState(0);
  const [contract, setContract] = useState("");
  const [mainLang, setMainLang] = useState("");
  const [time, setTime] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [descJob, setDescJob] = useState("");
  const [activityJob, setActivityJob] = useState("");
  const [langsJob, setLangsJob] = useState<string[]>([]);
  const [benefits, setBenefits] = useState("");

  const handlePublishJob = async () => {
    const job = await publishJob({ title, salary, contract, mainLang, time, companyAddress, descJob, activityJob, langsJob, benefits });
    console.log(job?.id);
  }


  return (
    <div className={styles.container}>
      <h1>Publicar Vaga</h1>
      <div className={styles.form}>
        <div>
          <FloatingLabel
            controlId="floatingInput"
            label="Titulo da Vaga"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Ex: Estágio Engengaria de Software C#" onChange={e => setTitle(e.target.value)}/>
          </FloatingLabel>
        </div>
        <div>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Salário">
                <Form.Control type="number" placeholder="1.500,00" onChange={e => setSalary(Number(e.target.value))}/>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Tipo de Contrato"
              >
                <Form.Select aria-label="Floating label select example" onChange={e => setContract(e.target.value)}>
                  <option>Selecione a forma de contrato</option>
                  <option value="CLT">CLT</option>
                  <option value="PJ">PJ</option>
                  <option value="Estágio">Estágio</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
        </div>
        <div className='mt-3 mb-3'>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Principal Linguagem">
                <Form.Control type="text" placeholder="Javascript" onChange={e => setMainLang(e.target.value)}/>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Tipo de Expediente"
              >
                <Form.Select aria-label="Floating label select example" onChange={e => setTime(e.target.value)}>
                  <option>Selecione o tipo de Expediente</option>
                  <option value="Remoto">Remoto</option>
                  <option value="Presencial">Presencial</option>
                  <option value="Híbrido">Híbrido</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
        </div>
        <div>
          <FloatingLabel
            controlId="floatingInput"
            label="Endereço da Empresa"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Ex: Avenida Golang, Lote Pascal" onChange={e => setCompanyAddress(e.target.value)}/>
          </FloatingLabel>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descrição da Vaga</Form.Label>
          <Form.Control as="textarea" rows={3} style={{resize: 'none'}} onChange={e => setDescJob(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Atividades da Vaga</Form.Label>
          <Form.Control as="textarea" rows={3} style={{resize: 'none'}} onChange={e => setActivityJob(e.target.value)}/>
        </Form.Group>
        <div>
          <Autocomplete
            multiple
            id="tags-standard"
            options={langs}
            getOptionLabel={(option) => option}
            onChange={(_, newValue) => setLangsJob(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Escolha as principais tecnologias usadas"
                placeholder="Favorites"
               
              />
            )}
          />
        </div>
        <div className="mb-3 mt-3">
          <FloatingLabel
            controlId="floatingInput"
            label="Beneficios"
          >
            <Form.Control type="text" placeholder="Ex: Avenida Golang, Lote Pascal" onChange={e => setBenefits(e.target.value)}/>
          </FloatingLabel>
        </div>
      </div>
      <Button variant="primary" onClick={handlePublishJob}>Publicar Vaga</Button>
    </div>
  )
}

export default PublishJob;