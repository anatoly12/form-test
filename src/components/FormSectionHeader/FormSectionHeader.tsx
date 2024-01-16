import { Typography } from "@mui/material";

export default function FormSectionHeader({ title }: { title: string }) {
    return (
      <Typography
        sx={{
          fontWeight: "500",
          mb: 1,
        }}
      >
        {title}
      </Typography>
    );
  }