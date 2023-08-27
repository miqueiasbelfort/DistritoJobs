import React from 'react';
import styles from './Fillter.module.css';

//Bootstrap
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Fillter() {
  return (
    <div className={styles.container}>
        <DropdownButton id="dropdown-item-button" title="Nível" >
            <Dropdown.Item as="button">Junior</Dropdown.Item>
            <Dropdown.Item as="button">Estágio</Dropdown.Item>
            <Dropdown.Item as="button">Freelas</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-item-button" title="Local" >
            <Dropdown.Item as="button">Remoto</Dropdown.Item>
            <Dropdown.Item as="button">Presensial</Dropdown.Item>
            <Dropdown.Item as="button">Hibrido</Dropdown.Item>
        </DropdownButton>
    </div>
  )
}

export default Fillter;