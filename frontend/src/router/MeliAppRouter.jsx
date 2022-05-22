import { AppModule, ProductsModule } from '../modules';

const { ApplicationRouter } = AppModule.router;

const MeliAppRouter = () => {
  return(
    <ApplicationRouter
      modules={[
        ProductsModule()
      ]}
    />
  )
}

export default MeliAppRouter;
