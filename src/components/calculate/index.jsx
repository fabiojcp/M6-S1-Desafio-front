import { useContext, useState } from "react";

import { CalculateContext } from "../../context";

import { InputMask, Integer } from "../../utils/InputMask";

import { useForm } from "react-hook-form";
import { CalculateSchema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  CheckBox,
  CheckBoxLabel,
  DivCheckBox,
  ErrorLabel,
  Form,
  Input,
  Label,
  Tittle,
  ValueInput,
  DivMain,
} from "./style";

export default function Calculate() {
  const { calculate } = useContext(CalculateContext);

  const [income, setIncome] = useState("");

  const handleIncome = (event) => setIncome(InputMask(event.target.value));

  const formSchema = CalculateSchema();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    const { amount, installments, mdr, days } = data;
    const listDays = [];

    if (days)
      for (let i = 0; i < installments; i++) {
        listDays.push(Number(i + 1) * 30);
      }

    days
      ? calculate({
          amount: Integer(amount),
          installments,
          mdr,
          days: listDays,
        })
      : calculate({
          amount: Integer(amount),
          installments,
          mdr,
        });
  };

  return (
    <DivMain>
      <Tittle>Simule sua antecipação</Tittle>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Informe o valor da venda *</Label>
        <ValueInput
          placeholder="R$ 1.000,00"
          value={income}
          {...register("amount", {
            onChange: (event) => handleIncome(event),
          })}
        ></ValueInput>
        <ErrorLabel>{errors.amount?.message}</ErrorLabel>

        <Label>Em quantas parcelas *</Label>
        <Input
          type="number"
          placeholder="Ex: 2"
          {...register("installments")}
        ></Input>
        <ErrorLabel>{errors.installments?.message}</ErrorLabel>

        <Label> Informe percentual de MDR *</Label>
        <Input type="number" placeholder="Ex: 4" {...register("mdr")}></Input>
        <ErrorLabel>{errors.mdr?.message}</ErrorLabel>

        <DivCheckBox>
          <CheckBoxLabel>Informações de período</CheckBoxLabel>
          <CheckBox type="checkbox" {...register("days")}></CheckBox>
        </DivCheckBox>

        <button type="submit" hidden />
      </Form>
    </DivMain>
  );
}
