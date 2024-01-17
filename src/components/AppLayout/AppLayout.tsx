"use client";

import { Box } from "@mui/material";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        width: "320px",
        height: "768px",
        margin: "auto",
        my: 2,
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#FAF8F5",
      }}
    >
      {children}
    </Box>
  );
}
