import { Box, Container } from "@mui/material";
import React from "react";
interface IProps {
    children?:React.ReactNode
}
export const LayoutContainer = ({ children }: IProps) => {
  return (
    <Container>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 4,
          gap:4,
          textAlign:'center'
        }}>
        {children}
      </Box>
    </Container>
  );
};
