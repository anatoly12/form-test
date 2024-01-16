"use client";

import { Box } from "@mui/material";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <Box sx={{ width: "320px", margin: "auto" }}>{children}</Box>;
}
