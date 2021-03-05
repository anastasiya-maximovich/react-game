import React, {useState} from 'react';
import './Game.css';
import Bord from '../Bord/Bord';
import { calculateWinner } from '../../functions/helperWinner';
import Links from '../Links/Links';


const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handClick = (i) => {
        const boardCopy = [...board];
        // Определить был ли клик по ячейке или игра закончена
        if(winner || boardCopy[i]) return;

        // Определить чей ход (Ч или О)
        boardCopy[i] = xIsNext ? 'X' : 'O';

        // Обновить стейт
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const startNewGame = () =>{
        return (
            <button className="start__btn" onClick={() => setBoard(Array(9).fill(null))}>New Game</button>
        )
    }

    return (
        <div className='wrapper'>
            { startNewGame()}
            <Bord squares={board} click={handClick}/>
            <p className="game__info">
            { winner ? 'Winner ' + winner : "It's player " + ( xIsNext ? 'X' : 'O') }           
            </p>
            <Links />
        </div>
    );
}

export default Game;