"use client";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Photo from "../../public/photo-linkedin.jpg";
import BoxReveal from "../ui/box-reveal";

export default function HomeCard() {
  return (
    <Card
      elevation={3}
      sx={{
        height: "40vh",
        width: "60vw",
        borderRadius: "1rem",
        zIndex: 1,
        display: "flex",
        backgroundColor: "#f4f4f5",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        src={Photo.src}
        alt="Photo de LAMAMRA Nasreddine"
        sx={{
          height: "80%",
          width: "15rem",
          p: "0.5rem",
          borderRadius: "50%",
        }}
      />
      <CardContent
        sx={{
          height: "100%",
          width: "70%",
          p: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "3rem" }}>
          Bienvenue !
        </Typography>
        <BoxReveal>
          <Typography>
            Je suis <b>LAMAMRA Nasreddine</b> un développeur fullstack junior
            passionné par la création d&apos;applications web performantes et
            intuitives. Avec des compétences en frontend et backend, je
            m&apos;efforce de transformer des idées en solutions efficaces. Mon
            enthousiasme pour le code et l&apos;apprentissage constant me motive
            à relever de nouveaux défis technologiques.
          </Typography>
        </BoxReveal>
      </CardContent>
    </Card>
  );
}
