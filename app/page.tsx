import MainPresentation from "@/components/main/MainPresentation";
import { Container } from "@mui/material";
import { AuroraBackground } from "../components/ui/aurora-background";

export default function Home() {
  return (
    <main>
      <AuroraBackground>
        <Container
          component="main"
          sx={{
            pt: "10vh",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MainPresentation />
        </Container>
      </AuroraBackground>
    </main>
  );
}
