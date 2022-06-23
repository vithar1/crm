import applicationUser from 'app/entities/application-user/application-user.reducer';
import product from 'app/entities/product/product.reducer';
import image from 'app/entities/image/image.reducer';
import category from 'app/entities/category/category.reducer';
import order from 'app/entities/order/order.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  applicationUser,
  product,
  image,
  category,
  order,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
