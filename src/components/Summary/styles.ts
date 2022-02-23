import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;
`;

export const SummaryContent = styled.div`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);

  &.highlight-content {
    background: var(--green);
    color: #fff;
  }
`;

export const SummaryHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SummaryValue = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`;
