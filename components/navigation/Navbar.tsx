"use client";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/Logo_NL.png";

export default function Navbar() {
  const pathname = usePathname();
  const activeStyle = { borderColor: "#34d399" };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#18181b" }}>
        <Toolbar>
          <Box
            component="img"
            src={Logo.src}
            alt="Logo N.L"
            sx={{ height: "8vh" }}
          />
          <Box
            component="nav"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10vh",
              width: "90vw",
              height: "5rem",
            }}
          >
            <Link href="/" passHref>
              <Typography
                textAlign="center"
                variant="h6"
                component="div"
                className="hover:text-emerald-400 hover:border-b-4 border-emerald-400 pb-3 pt-3 transition-all duration-100 ease-in-out"
                sx={{
                  borderBottom:
                    pathname === "/"
                      ? `4px solid ${activeStyle.borderColor}`
                      : "",
                }}
              >
                Home
              </Typography>
            </Link>
            <Link href="/about-me">
              <Typography
                textAlign="center"
                variant="h6"
                component="div"
                className="hover:text-emerald-400 hover:border-b-4 border-emerald-400 pb-3 pt-3 transition-all duration-100 ease-in-out"
                sx={{
                  borderBottom:
                    pathname === "/about-me"
                      ? `4px solid ${activeStyle.borderColor}`
                      : "",
                }}
              >
                About me
              </Typography>
            </Link>
            <Link href="/my-projects">
              <Typography
                textAlign="center"
                variant="h6"
                component="div"
                className="hover:text-emerald-400 hover:border-b-4 border-emerald-400 pb-3 pt-3 transition-all duration-100 ease-in-out"
                sx={{
                  borderBottom:
                    pathname === "/my-projects"
                      ? `4px solid ${activeStyle.borderColor}`
                      : "",
                }}
              >
                My Projects
              </Typography>
            </Link>
            <Link href="/contact">
              <Typography
                textAlign="center"
                variant="h6"
                component="div"
                className="hover:text-emerald-400 hover:border-b-4 border-emerald-400 pb-3 pt-3 transition-all duration-100 ease-in-out"
                sx={{
                  borderBottom:
                    pathname === "/contact"
                      ? `4px solid ${activeStyle.borderColor}`
                      : "",
                }}
              >
                Contact me
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
