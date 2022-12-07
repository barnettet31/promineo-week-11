import React, { useMemo } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

interface IProps {
  children?: React.ReactNode;
}
export const MuiThemeProvider = ({ children }: IProps) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
 
 const getDesignTheme = ()=>{
 return {
    mode: prefersDarkMode? 'dark':'light',
    palette: prefersDarkMode? {
      primary: {
        main: '#b32a38',
        light: '#832543',
      },
      
      secondary: {
        main: '#f10760',
      },
      error: {
        main: '#fd564b',
      },
      text: {
        primary: '#f9f9f9',
        secondary: 'rgba(185,185,185,0.7)',
        
      },
      info:{
        main:'#e2e9ef'
      },
      
      background: {
        default: '#303031',
        paper: '#424241',
      }
    }:{
      primary: {
        main: '#b32a38',
        light: '#832543',
      },
      
      secondary: {
        main: '#f10760',
      },
      error: {
        main: '#fd564b',
      },
      text: {
        primary: '#303031',
        secondary: '#424241',
      },
      info:{
        main:'#424241'
      },
      background: {
        default: '#f9f9f9',
        paper: 'rgba(185,185,185,0.7)',
      }
    },
  };
 } 
  const theme = useMemo(
    () => createTheme(getDesignTheme())
      ,
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
