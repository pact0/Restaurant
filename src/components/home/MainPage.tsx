import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Button } from '../common/Button';
import { Navbar } from './Navbar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Wrapper = styled('div')`
  background: white;
  width: 100%;
  height: 100%;
`;

export const MainPage = () => {
  const [counter, setCounter] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <Wrapper>
      <Navbar text={'fsdjk'} />
      <Button text={'aa'} />
      {counter}
      <button onClick={updateCounter}>plus one</button>

      <FormGroup>
        <FormControlLabel
          onClick={()=> setIsChecked(!isChecked)}
          control={<Checkbox checked={isChecked} />}
          label="Label"
        />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>

    </Wrapper>
  );
};
