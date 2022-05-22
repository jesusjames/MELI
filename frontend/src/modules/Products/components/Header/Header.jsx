import { HeaderContainerStyled, HeaderStyled } from './style';
import MeliPNG from 'assets/images/Logo_meli.png';
import Input from '../Input/Input';
import { useState } from 'react';

const Header = () => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  return(
    <HeaderStyled>
      <HeaderContainerStyled className="container m-auto">
        <img className="mr-2" src={MeliPNG} alt="logo mercado libre" />
        <Input
          className="brl-4"
          value={search}
          onChange={onChangeSearch}
          placeholder="Nunca dejes de buscar"
          block />
        <button>buscar</button>
      </HeaderContainerStyled>
    </HeaderStyled>
  )
}

export default Header;
