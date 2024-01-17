"use client";
import { Box, Button, Typography } from "@mui/material";
import WelcomeHeader from "./WelcomeHeader";
import TextInput from "./TextInput";
import Image from "next/image";
import { useForm } from "react-hook-form";
import isNicknameValid from "@/validators/isNicknameValid";
import isUrlValid from "@/validators/isUrlValid";
import isDateValid from "@/validators/isDateValid";
import FormSectionHeader from "./FormSectionHeader";

export default function Welcome() {
  const { handleSubmit, reset, control } = useForm();

  const onSubmit = () => {
    reset();
  };

  return (
    <Box>
      <WelcomeHeader />
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          p: 1,
        }}
        noValidate
      >
        <Box
          sx={{
            mb: 1,
            px: 1,
            pt: 1,
            border: 1,
            borderColor: "background.paper",
            borderRadius: "8px",
          }}
        >
          <FormSectionHeader title="About you" />
          <TextInput
            label="Full name"
            required
            startIconSrc="/icons/profile.svg"
            name="fullName"
            control={control}
          />
          <TextInput
            label="Date of birth"
            startIconSrc="/icons/calendar.svg"
            name="dob"
            control={control}
            validator={isDateValid}
          />
          <TextInput
            required
            label="Nickname"
            placeholder="No spaces"
            startIconSrc="/icons/nickname.svg"
            name="nickname"
            control={control}
            validator={isNicknameValid}
          />
          <FormSectionHeader title="Contact information" />
          <TextInput
            required
            type="email"
            label="Email"
            placeholder="email@domain.com"
            startIconSrc="/icons/email.svg"
            name="email"
            control={control}
          />
          <TextInput
            required
            label="Portfolio link"
            placeholder="https://"
            startIconSrc="/icons/link.svg"
            name="portfolio"
            control={control}
            validator={isUrlValid}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="outlined" type="submit">
            <Typography
              sx={{
                mr: "4px",
              }}
            >
              Submit my form
            </Typography>
            <Image src="/icons/launch.svg" alt="*" width={16} height={16} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
