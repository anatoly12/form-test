import AppLayout from "@/components/AppLayout";
import ThemeLayout from "@/components/ThemeLayout";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <ThemeLayout>
      <AppLayout>
        <Welcome />
      </AppLayout>
    </ThemeLayout>
  );
}
