"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function WelcomeHeader() {
  return (
    <Box
      sx={{
        backgroundColor: "#F7F3EE",
        py: 2,
        px: 1,
      }}
    >
      <Box
        sx={{
          mb: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "26px",
            fontWeight: "500",
            color: "text.secondary",
            letterSpacing: "0",
            mr: 0,
          }}
        >
          Welcome!
        </Typography>
        <Image
          src="/icons/welcome-star.svg"
          priority
          alt="icon"
          width={19.41}
          height={19.41}
        />
      </Box>
      <Typography>Please, complete the following example form.</Typography>
    </Box>
  );
}
