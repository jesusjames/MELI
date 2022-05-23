import { HeaderContainerStyled, HeaderStyled } from './style';
import MeliPNG from 'assets/images/Logo_meli.png';
import SearchPNG from 'assets/images/Search.png';
import Input from '../Input/Input';
import { useState } from 'react';
import Button from '../Button/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Header = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');
  const [search, setSearch] = useState(q);
  const navigate = useNavigate();

  const onChangeSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const searchProducts = () => {
    navigate(`/items?q=${search}`);
  }

  return(
    <HeaderStyled>
      <HeaderContainerStyled className="container m-auto">
        <img className="mr-2" src={MeliPNG} alt="logo mercado libre" onClick={() => navigate('/')}/>
        <Input
          className="brl-4"
          value={search}
          onChange={onChangeSearch}
          placeholder="Nunca dejes de buscar"
          block />
        <Button
          className="brr-4"
          disabled={!search}
          icon={SearchPNG}
          onClick={searchProducts}
        />
      </HeaderContainerStyled>
    </HeaderStyled>
  )
}

export default Header;
