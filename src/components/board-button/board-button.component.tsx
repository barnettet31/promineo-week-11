import CloseIcon from "@mui/icons-material/Close";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Box, Button, Grid, Icon, IconButton,  useTheme } from "@mui/material";
interface IProps {
  value: number | null;
  onClick: () => void;
}

export const BoardButton = ({ value, onClick }: IProps) => {
  const _renderIcon = (value: number) => value === 2 ? <CloseIcon /> : <RadioButtonUncheckedIcon />;
  const theme = useTheme();
  return (
    <Box marginX="auto" marginY="auto">
    <Button sx={{padding:'1.5em', borderRadius:'5px', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:theme.palette.primary.main}} onClick={onClick}>
      {
        <Icon
          fontSize="small"
          color="info"
          sx={{width:'1.125em', height:'1.125em'}}
          onClick={() => onClick()}>
          {value === null ? null : _renderIcon(value)}
        </Icon>
      }
    </Button>
    </Box>
  );
};
