import { Container, Typography } from "@mui/material";
export interface IScoreProps {

    player1: number;
    player2: number;
    tie: number;
  
}
interface IProps extends IScoreProps { 
  turn:boolean;
}
export const Score = ({ player1, player2, tie, turn }: IProps) => {
    return(
  <Container maxWidth="xl" >

    <Typography mb={1} variant="h4" >Player 1 Score: {player1}</Typography>
    <Typography mb={1} variant="h4">Player 2 Score: {player2}</Typography>
    <Typography variant="h4" mb={3}>Ties: {tie}</Typography>
    <Typography variant="h4" mb={3}>Who's turn is it? {turn? 'Player 1': 'Player 2'}</Typography>

  </Container>);
};
