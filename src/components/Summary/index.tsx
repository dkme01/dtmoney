import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { SummaryContainer, SummaryContent, SummaryHeader, SummaryValue } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryContent>
        <SummaryHeader>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </SummaryHeader>
        <SummaryValue>R$1000,00</SummaryValue>
      </SummaryContent>
      <SummaryContent>
        <SummaryHeader>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saidas" />
        </SummaryHeader>
        <SummaryValue>- R$500,00</SummaryValue>
      </SummaryContent>
      <SummaryContent className="highlight-content">
        <SummaryHeader>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </SummaryHeader>
        <SummaryValue>R$500,00</SummaryValue>
      </SummaryContent>
    </SummaryContainer>
  );
}
