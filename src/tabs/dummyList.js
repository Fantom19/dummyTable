import React from "react";
import tabs from "../tabs.json";
import {
  StyledList,
  StyledListItem,
  StyledTitle,
  StyledText,
} from "./dummyListStyle";

const DummyList = () => {
  return (
    <div>
      <StyledList>
        {tabs.map(({ id, title, order, path }) => (
          <StyledListItem key={id}>
            <StyledTitle>{title}</StyledTitle>
            <StyledText>Order: {order}</StyledText>
            <StyledText>Path: {path}</StyledText>
          </StyledListItem>
        ))}
      </StyledList>
    </div>
  );
};

export default DummyList;
