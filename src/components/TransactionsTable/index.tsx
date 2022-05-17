import React from "react";
import { TransactionContainer } from "./styles";

export function TransactionsTable() {
  return (
    <TransactionContainer>
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
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.000</td>
            <td>Moradia</td>
            <td>25/02/2021</td>
          </tr>
        </tbody>
      </table>
    </TransactionContainer>
  );
}
