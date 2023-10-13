import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  address: yup.string().required(),
  contact_number: yup.string().required(),
  total_purchases: yup.number().integer().required(),
  last_purchase_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
