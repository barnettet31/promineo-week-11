import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CodeElement } from "../prism-code/codeElement.component";
export const CodeContainer = () => {
  const boardMapCode = `import { Box } from "@mui/material";
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
  }`;
  const calculateWinnerCode =`const calculateTheWinner = (board:ArrNulNum):NulNum=>{
    const winningLines = [
       [0,1,2],
       [3,4,5],
       [6,7,8],
       [0,3,6],
       [1,4,7],
       [2,5,8],
       [0,4,8],
       [2,4,6],
    ];
    for(let [x,y,z] of winningLines){
       if(board[x] && board[x] === board[y] && board[x] === board[z]){
           return board[x];
       }
   }
   if(board.every(value=>value != null)) return 0
   return null;
   }
const incrementScore = (winner:number)=>{
    switch(winner){
        case 0:
            setScore((prevState)=>{
                const newState: IScoreProps = {
                    ...prevState,
                    tie:prevState.tie++
                }
                return newState;
            });
            break;
        case 1:
            setScore((prevState)=>{
                const newState: IScoreProps = {
                    ...prevState,
                    player2:prevState.player2++
                }
                return newState;
            });
            break;
        case 2: 
        setScore((prevState)=>{
            const newState: IScoreProps = {
                ...prevState,
                player1:prevState.player1++
            }
            return newState;
        });
         break;

    }
}
  useEffect(()=>{
    function checkForWinner (){
     if(isThereAWinner === 2)return incrementScore(2)
     if(isThereAWinner === 1 ) return incrementScore(1)
     if(isThereAWinner=== 0 ) return incrementScore(0);
    }
    checkForWinner();
     
 },[isThereAWinner]);
`
const resetBoardCode = `const resetBoard = ()=> setTimeout(()=>{
  setIsPlayerOne(true);
  setBoard(initialBoardState);
}, 500);`;
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="info" />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>What did I do to achieve this awesome UI?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            So to put it simply, I used a React Component library called
            'Material UI'. I never really liked the look of BootStrap Elements
            and wanted to try my hand at a couple of other elements so I started
            fooling around with this component library.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="info" />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>What is the board Element?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The board element is actually 2 Material UI Box Components, one
            contained within the other, that finally contains a mapped out array
            of buttons as children.The inner box uses grid to arrange those
            elements. The board element takes an array that I created in the
            wrapper that I created at app load which contains 9 "null" values.
          </Typography>
          <CodeElement code={boardMapCode} type="tsx" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="info" />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography>How did I determine who the winner is?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            That's actually fairly simple. I used a useEffect hook to run a
            function on ever rerender. That function took in the current board
            element, looped through an array of potential "wins" and saw if
            those elements contained the same exact value. If it found a match
            then it returned a corresponding value for the winner. If it doesn't
            find one but the board passed doesn't contain a null value, then I
            counted that as a tie, and indicated that to the user. Otherwise I
            returned null. Here's what that looked like: 
          </Typography>
          <CodeElement type="typescript" code={calculateWinnerCode}/>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="info" />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <Typography>How Do I reset the board?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           That's the simplest of them all! When a user clicks the close icon on the alert button it launches a function called resetBoard that basically resets the player counter to 0 and resets the board to the inital state. 
          </Typography>
          <CodeElement type="typescript" code={resetBoardCode} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
