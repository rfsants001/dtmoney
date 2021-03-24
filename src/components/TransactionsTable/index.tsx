import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>App</td>
                        <td className="deposit">R$ 1200,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/03/2021</td>
                    </tr>
                    <tr>
                        <td>Luz</td>
                        <td className="withdraw">- R$ 100,00</td>
                        <td>Casa</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}