import React from 'react';
import styles from './PublishJob.module.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import { langs } from '../../utils/langs';

function PublishJob() {
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
            <Form.Control type="text" placeholder="Ex: Estágio Engengaria de Software C#" />
          </FloatingLabel>
        </div>
        <div>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Salário">
                <Form.Control type="number" placeholder="1.500,00" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Tipo de Contrato"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Selecione a forma de contrato</option>
                  <option value="1">CLT</option>
                  <option value="2">PJ</option>
                  <option value="3">Estágio</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
        </div>
        <div className='mt-3 mb-3'>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Principal Linguagem">
                <Form.Control type="text" placeholder="Javascript" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Tipo de Expediente"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Selecione o tipo de Expediente</option>
                  <option value="1">Remoto</option>
                  <option value="2">Presencial</option>
                  <option value="3">Hibrido</option>
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
            <Form.Control type="text" placeholder="Ex: Avenida Golang, Lote Pascal" />
          </FloatingLabel>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descrição da Vaga</Form.Label>
          <Form.Control as="textarea" rows={3} style={{resize: 'none'}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Atividades da Vaga</Form.Label>
          <Form.Control as="textarea" rows={3} style={{resize: 'none'}}/>
        </Form.Group>
        <div>
          <Autocomplete
            multiple
            id="tags-standard"
            options={langs}
            getOptionLabel={(option) => option.title}
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
      </div>
      <Button variant="primary">Publicar Vaga</Button>
    </div>
  )
}

export default PublishJob;