import AppLayout from "@/components/AppLayout/AppLayout";
import ThemeLayout from "@/components/ThemeLayout/ThemeLayout";
import Welcome from "@/components/Welcome/Welcome";

export default function Home() {
  return (
    <ThemeLayout>
      <AppLayout>
        <Welcome />
      </AppLayout>
    </ThemeLayout>
  );
}
