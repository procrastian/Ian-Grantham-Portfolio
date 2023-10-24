import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ProjectGrid() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Project Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                Project Description
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Tech Stack
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ cursor: "pointer" }}
                variant="body2"
              ></Typography>
            </Grid>
            <Grid item>
              <a
                href="https://github.com/procrastian/react-media-prompts"
                target="blank"
              >
                GitHub LINK
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://procrastian.github.io/react-media-prompts/"
                target="blank"
              >
                View Live LINK
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
