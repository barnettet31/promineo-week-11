import { Box, Container } from "@mui/material";
import React from "react";
interface IProps {
    children?:React.ReactNode
}
export const LayoutContainer = ({ children }: IProps) => {
  return (
    <Container sx={{paddingBottom:10}}>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 4,
          gap:1,
          textAlign:'center'
        }}>
        {children}
      </Box>
    </Container>
  );
};
