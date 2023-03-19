import { Option } from "@/interfaces/form.interfaces";
import { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  color: #ffff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  border: unset;
`;

export default function useSelectPokedex(
  label: string,
  options: Array<Option>
) {
  const [state, setState] = useState("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
  };

  const selectRegion = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={handleSelectChange}>
        <option value="" hidden>
          {label}
        </option>
        {
          options.map((option) => {
            return (
              <option key={option.id} value={option.name}>
                { option.name.toUpperCase() }
              </option>
            );
          })
        }
      </Select>
    </>
  );

  return [state, selectRegion];
}
