"use client";
import BoxReveal from "@/components/ui/box-reveal";
import { Button, Container, Typography } from "@mui/material";
import { Titillium_Web } from "@next/font/google";
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";

const spartan = Titillium_Web({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <AuroraBackground>
        <Container
          component="main"
          maxWidth={false}
          sx={{
            m: 0,
            mt: "1rem",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
          }}
        >
          {" "}
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4  "
          >
            <BoxReveal>
              <Typography
                variant="h1"
                className={`${spartan.className} text-zinc-300`}
                textAlign="center"
                sx={{
                  fontWeight: "700",
                  fontSize: "15vh",
                  width: "100vw",
                }}
              >
                LAMAMRA NASREDDINE
              </Typography>
            </BoxReveal>
          </motion.div>
          <BoxReveal>
            <Typography
              className={`${spartan.className} text-emerald-600`}
              textAlign="center"
              sx={{
                fontWeight: "400",
                fontSize: "8vh",
                width: "50vw",
              }}
            >
              Fullstack Developper
            </Typography>
          </BoxReveal>
          <Button
            variant="outlined"
            className="rounded-3xl bg-zinc-800 border-emerald-500"
          >
            ARHAAA
          </Button>
        </Container>
      </AuroraBackground>
    </main>
  );
}
