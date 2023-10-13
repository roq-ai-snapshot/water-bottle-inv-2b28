import * as yup from 'yup';

export const supplyChainValidationSchema = yup.object().shape({
  supplier_name: yup.string().required(),
  delivery_date: yup.date().required(),
  quantity: yup.number().integer().required(),
  status: yup.string().required(),
  inventory_id: yup.string().nullable().required(),
});
