import * as yup from "yup";

export const CalculateSchema = () => {
  const schema = yup.object().shape({
    amount: yup
      .string()
      .matches(/[^\d]+/g, "Valor entre 1.000,00 à 1000.000,00")
      .min(10, "Valor mínimo 1.000,00")
      .max(16, "Valor máximo 100000.000,00")
      .required("Campo obrigatório"),
    installments: yup
      .number()
      .integer()
      .typeError("Campo obrigatório")
      .min(1, "Valor mínimo 1")
      .max(12, "Valor máximo 12")
      .required("Campo obrigatório"),
    mdr: yup
      .number()
      .integer()
      .typeError("Campo obrigatório")
      .max(99, "Valor máximo 99")
      .required("Campo obrigatório"),
    days: yup.boolean().notRequired(),
  });

  return schema;
};