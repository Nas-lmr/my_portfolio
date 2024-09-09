import { Box, Button, Typography } from "@mui/material";
import BoxReveal from "../ui/box-reveal";

export default function MainPresentation() {
  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography sx={{ width: "60%", fontSize: "1.25rem", color: " #34d399" }}>
        Hello, my name is
      </Typography>
      <BoxReveal>
        <Typography
          variant="h1"
          className=" text-zinc-100"
          sx={{ fontSize: "4.5rem", fontWeight: 600 }}
        >
          Lamamra Nasreddine
        </Typography>
      </BoxReveal>
      <Typography
        variant="h2"
        className=" text-zinc-400"
        sx={{ fontWeight: 500 }}
      >
        I&apos;m a Fullstack developper
      </Typography>
      <Typography
        className=" text-zinc-400"
        sx={{ width: "65%", fontSize: "1.25rem", textJustify: "auto" }}
      >
        Passionate about building modern and efficient web applications. Explore
        my projects, designed with a keen eye for detail. Always eager to learn
        and ready to tackle new challenges. I&apos;m currently studying at{" "}
        <span
          style={{
            color: "#34d399",
            fontWeight: 500,
          }}
        >
          Wild Code School.
        </span>
      </Typography>
      <Button
        variant="outlined"
        sx={{
          mt: "2rem",
          width: "12rem",
          height: "7vh",
          color: " #34d399",
          borderColor: "#34d399",
          textTransform: "none",
          fontWeight: 500,
          "&:hover": {
            backgroundColor: "#34d399",
            color: "#18181b",
            border: "none",
          },
        }}
      >
        More about me !
      </Button>
    </Box>
  );
}
