import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  water_bottle_type: yup.string().required(),
  quantity: yup.number().integer().required(),
  minimum_stock_level: yup.number().integer().required(),
  maximum_stock_level: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});
