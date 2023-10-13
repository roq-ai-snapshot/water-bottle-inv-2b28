import * as yup from 'yup';

export const salesValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  total_price: yup.number().integer().required(),
  payment_status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  inventory_id: yup.string().nullable().required(),
});
