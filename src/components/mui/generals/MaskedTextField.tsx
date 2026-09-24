import { TextField } from '@mui/material';
import React from 'react';
import { IMaskInput } from 'react-imask';

type MaskedTextFIeld = {
    id?: string;
    value?: string;
    name?: string;
    onChange?: any;
    mask: string;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, MaskedTextFIeld>(
  function TextMaskCustom(props, ref) {
    const { onChange, name, value, mask, ...other } = props;

    const iMask = (mask !== null) ? mask : '000.000.000-00'

    return (
      <IMaskInput
        {...other}
        mask={iMask}
        inputRef={ref}
        onAccept={(value: string) => {
            onChange({target: {name: name , value}})
        }}
      />
    );
  },
);


export default function MaskedTextFIeld({id, name, value, onChange, mask} : MaskedTextFIeld){

    return (
        <TextField
            id={`${id}`}
            name={`${name}`}
            value={`${value}`}
            onChange={onChange}
            slotProps={{
                input: {
                    inputComponent: TextMaskCustom as any,
                },
                htmlInput: {
                    mask: mask
                } as any
            }}
        />
    )
}