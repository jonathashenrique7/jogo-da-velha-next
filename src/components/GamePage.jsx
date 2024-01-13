import { Header } from "./header/Header"
import { Game } from "./Game/Game"

// Primeiro projeto -> Criando o componente do ícone
export const GamePage = () => {
    return (
        <div className="container">
            <Header />
            <Game />
        </div>
    )
}

// [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ] 

// Estado -> [ 0, 0, 0, 0, 0, 0, 0, 0 ]

// 0 -> Branco 
// 1 -> Círculo 
// -1 -> X 