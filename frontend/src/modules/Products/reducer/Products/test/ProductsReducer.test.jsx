import { ProductsActions, ProductsReducer } from '../ProductsReducer';

const initState = {
  isLoading: false,
  error: null,
  data: {}
};

describe('Test ProductsReducer', () => {
  it("should return initial state", () => {
    expect(ProductsReducer(undefined, {})).toEqual(initState);
  });

  it("fire Products/productsFetchInit type and validate ir isLoading false to true", () => {
    const type = "Products/productsFetchInit";
    const action = { type };

    const reducerReturnValue = ProductsReducer(initState, action);

    expect(reducerReturnValue.isLoading).toEqual(true);
  });

  it("fire Products/productsFetchSuccess type and validate data", () => {
    const type = "Products/productsFetchSuccess";
    const data = {
      categories: ['PC'],
      items: [{name: 'gammer'}]
    }
    const action = { type, payload: data };

    const reducerReturnValue = ProductsReducer(initState, action);

    expect(reducerReturnValue.data).toEqual(data);
  });

  it("should test productsFetchInit action", () => {
    const search = 'celular';
    const actionReturnValue = ProductsActions.productsFetchInit({search});

    console.log(actionReturnValue);

    expect(actionReturnValue.type).toEqual("Products/productsFetchInit");
    expect(actionReturnValue.payload.search).toEqual(search);
  });
})
