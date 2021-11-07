import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                   <tr>
                       <th>Titulo</th>
                       <th>Valor</th>
                       <th>Categoria</th>
                       <th>Data</th>
                   </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$ 10,00</td>
                        <td>Serviço</td>
                        <td>06/11/2021</td>
                    </tr>
                    <tr>
                        <td>Alugel</td>
                        <td className="withdraw">R$ - 100,00</td>
                        <td>Casa</td>
                        <td>06/11/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}