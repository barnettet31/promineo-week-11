import { Alert, Stack, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { ArrNulNum, Board, NulNum } from "../../components/board/board.component";
import { IScoreProps, Score } from "../../components/score/score.component";
const initialState: IScoreProps = {
    player1:0,
    player2:0,
    tie:0
};
const initialBoardState:ArrNulNum = Array(9).fill(null);
const calculateTheWinner = (board:ArrNulNum):NulNum=>{
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
export function AppPage (){
    const [score, setScore] = useState<IScoreProps>(initialState);
    const [board, setBoard] = useState<ArrNulNum>(initialBoardState);
    const [isPlayerOne,setIsPlayerOne] = useState<boolean>(true);
    const isThereAWinner: number | null = calculateTheWinner(board);
    const theme = useTheme()
    const resetBoard = ()=> setTimeout(()=>{
        setIsPlayerOne(true);
        setBoard(initialBoardState);
    }, 500);
    const incrementScore = (winner:number)=>{
        console.log(winner);
        switch(winner){
            case 0:
                setScore((prevState)=>{
                    const newState: IScoreProps = {
                        ...prevState,
                        tie:prevState.tie++
                    }
                    console.log("tie dude");
                    return newState;
                });
                break;
            case 1:
                setScore((prevState)=>{
                    const newState: IScoreProps = {
                        ...prevState,
                        player2:prevState.player2++
                    }
                    console.log('player 2');
                    return newState;
                });
                break;
            case 2: 
            setScore((prevState)=>{
                const newState: IScoreProps = {
                    ...prevState,
                    player1:prevState.player1++
                }
                console.log('player 1');
                return newState;
            });
             break;

        }
    }

    const handleClick = (number:number)=>{
      setBoard((prevBoard)=>{
        const copyOfBoard = [...prevBoard];
        if(isThereAWinner || prevBoard[number]) return prevBoard;
        copyOfBoard[number] = isPlayerOne? 2: 1;
        setIsPlayerOne(!isPlayerOne);
        return copyOfBoard; 
      })
    }
    const _chooseWinnerText =(number:number|null)=>{
        switch(number){
            case 0:
                return "No Winner It's a Tie"
                
            case 1: 
                return "Player 2"
            case 2:
                return "Player 1"
        }
    }
    useEffect(()=>{
       function checkForWinner (){
        if(isThereAWinner === 2)return incrementScore(2)
        if(isThereAWinner === 1 ) return incrementScore(1)
        if(isThereAWinner=== 0 ) return incrementScore(0);
       }
       checkForWinner();
       console.table(score);
        
    },[isThereAWinner])

    return (
        <>
        <Score player1={score.player1} player2={score.player2} tie={score.tie} turn={isPlayerOne}/>
        <Container maxWidth='sm'>
        <Board squares={board} onClick={(number)=>handleClick(number)}/>
        {isThereAWinner !== null ? (<Alert color="info" onClose={()=>resetBoard()} sx={{backgroundColor:theme.palette.background.paper, color:theme.palette.primary.main, display:'flex', alignItems:'center'}}>{`Winner:  ${_chooseWinnerText(isThereAWinner)}`}</Alert>): null}
        </Container>
        </>

    )
}