import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const StyledListItem = styled.li`
  border: 1px solid #ccc;
  flex: 1;
  padding: 10px;
  max-width: calc(33.33% - 20px);
  box-sizing: border-box;
`;

export const StyledTitle = styled.h2`
  color: #f00;
  font-size: 20px;
`;

export const StyledText = styled.p`
  color: #666;
  margin: 5px 0;
`;
