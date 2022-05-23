import ListProductsPage from '../ListProductsPage';
import { render as rtlRender, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../../App/store';
import { MemoryRouter } from 'react-router-dom';
import { mockData } from './mockData';
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const render = component => rtlRender(
  <Provider store={store}>
    <MemoryRouter initialEntries={["/items?q=celular"]}>
      {component}
    </MemoryRouter>
  </Provider>
)

describe('Test ListProductsPage component', () => {
  const handlers = [
    rest.get('/api/items', (req, res, ctx) => {
      return res(ctx.json(mockData), ctx.delay(150))
    })
  ]

  const server = setupServer(...handlers)

  // Enable API mocking before tests.
  beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
  afterAll(() => server.close())

  it('Should render and match the snapshot', () => {
    const { container } = render(<ListProductsPage />)
    expect(container).toMatchSnapshot();
  })

  it('Must show only 4 products', async() => {
    render(<ListProductsPage />)
    await waitFor(() => expect(screen.getAllByTestId('card-item')).toHaveLength(4))
  })
})
