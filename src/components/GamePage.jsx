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
