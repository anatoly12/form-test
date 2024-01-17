"use client";

import { Box } from "@mui/material";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        width: "320px",
        margin: "auto",
        my: 2,
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
}
