import { Box,  } from "@mui/material";
import { BoardButton } from "../board-button/board-button.component";
export type NulNum = number | null;
export type ArrNulNum = NulNum[];
interface IProps {
    squares:ArrNulNum, 
    onClick:(number:number)=>void 
}
export const Board = ({squares, onClick}:IProps)=>{
    return(
       <Box sx={{width:1}} justifyContent="center" >
        <Box marginX="auto" height={400} display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={4} maxWidth="sm">
        {squares.map((square, i)=> <BoardButton key={i} value={square} onClick={()=>onClick(i)} />)}
        </Box>
       </Box> 
    )
}