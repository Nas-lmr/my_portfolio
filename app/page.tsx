"use client";
import BoxReveal from "@/components/ui/box-reveal";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { AuroraBackground } from "../components/ui/aurora-background";

export default function Home() {
  const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
  });
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
            className="relative flex flex-col gap-4 px-4 "
          >
            <BoxReveal>
              <Typography variant="h1" className={poppins.className}>
                LAMAMRA NASREDDINE
              </Typography>
            </BoxReveal>
          </motion.div>
          <BoxReveal>
            <Typography textAlign="center">Fullstack Developper</Typography>
          </BoxReveal>
        </Container>
      </AuroraBackground>
    </main>
  );
}
