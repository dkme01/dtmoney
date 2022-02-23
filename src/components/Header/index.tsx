import dtmoneyLogo from "../../assets/logo.svg";
import { HeaderButton, HeaderContainer, HeaderContent } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={dtmoneyLogo} alt="dt money" />
        <HeaderButton type="button">Nova transação</HeaderButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
