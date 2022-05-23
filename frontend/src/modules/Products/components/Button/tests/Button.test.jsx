import Button from '../Button';
import { fireEvent, render, screen  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { wait } from '@testing-library/user-event/dist/utils';

describe('Button component', () => {
  it('Should render and match the snapshot', () => {
    const { container } = render(<Button>Comprar</Button>);
    expect(container).toMatchSnapshot();
  });

  it('Should show your children correctly', () => {
    render(<Button>Comprar</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Comprar');
  })

  it('Call onClick prop when clicked Button component', () => {
    const handleClickBtn = jest.fn();
    render(<Button onClick={handleClickBtn}>Comprar</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClickBtn).toHaveBeenCalledTimes(1);
  })

  it("shows correct color with color prop primary",async () => {
    render(<Button color="primary">Comprar</Button>);
    expect(screen.getByTestId("button-test")).toHaveStyle({ background: '#0287d5' });

    const element = screen.getByRole('button');
    userEvent.hover(element);
    await wait(() => {
      expect(screen.getByTestId("button-test")).toHaveStyle({ background: '#007eff' });
    })
  })
});
