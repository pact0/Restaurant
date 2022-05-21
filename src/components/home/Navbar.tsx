import { Button } from 'components/common/Button';
import React from 'react';

interface Props {
  isLoggedin?: boolean;
  text: string;
}

export const Navbar = ({ isLoggedin, text }: Props) => {
  const a = 'a';

  const fun = () => {
    console.log(a);
  };

  return (
    <div>
      <Button text={'tekst'} />
    </div>
  );
};
