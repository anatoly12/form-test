"use client";

import { InputAdornment, Typography, Box, TextField } from "@mui/material";
import Image from "next/image";
import { ReactNode, useMemo, useState } from "react";
import { Control, Controller, Validate } from "react-hook-form";

interface TextInputProps {
  placeholder?: string;
  required?: boolean;
  label?: ReactNode;
  startIconSrc?: string;
  type?: React.InputHTMLAttributes<unknown>["type"];
  name: string;
  control: Control<Record<string, string>, any>;
  validator?: Validate<string, Record<string, string>>;
}

export default function TextInput({
  placeholder,
  label,
  startIconSrc,
  required,
  type,
  name,
  control,
  validator,
}: TextInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: Boolean(required),
          message: `${label} is required to proceed`,
        },
        validate: validator,
        pattern:
          type === "email"
            ? {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: `${label} is invalid`,
              }
            : undefined,
      }}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: 1,
          }}
        >
          {label && (
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "12px",
                letterSpacing: "0.36px",
              }}
            >
              {label}{" "}
              {required && (
                <Image
                  priority={true}
                  src="/icons/require-star.svg"
                  alt="*"
                  width={10}
                  height={10}
                />
              )}
            </Typography>
          )}
          <TextField
            value={value || ""}
            required={required}
            type={type}
            variant="standard"
            placeholder={placeholder}
            onChange={onChange}
            error={Boolean(error?.message)}
            helperText={error?.message}
            FormHelperTextProps={{
              sx: {
                letterSpacing: "0.24px",
              },
            }}
            InputProps={{
              startAdornment: startIconSrc && (
                <InputAdornment position="start">
                  <Image src={startIconSrc} alt="icon" width={16} height={16} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      )}
    />
  );
}
