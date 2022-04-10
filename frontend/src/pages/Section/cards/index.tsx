import { FC, useState } from "react";
import { Button, CardContainer, CardDetailContainer, HeaderText, Seperater } from "../../styles";

interface personCardInterface {
  name: string;
  gender: string;
  onClick: () => void;
}

interface personDetailsInterface {
  name: string;
  height: string;
  gender: string;
  mass: string;
  homeWorld: string;
  onClick: () => void;
}

export const PersonCard: FC<personCardInterface> = ({
  name,
  gender,
  onClick
}) => {
  return (
    <>
      <CardContainer onClick={onClick}>
        <HeaderText>{name}</HeaderText>
        <p>gender: {gender}</p>
      </CardContainer>
    </>
  );
};

export const PersonDetailsCard: FC<personDetailsInterface> = ({
  name,
  height,
  gender,
  mass,
  homeWorld,
  onClick,
}) => {
  return (
    <CardDetailContainer>
        <Button marginBottom={"10px"} marginTop={"10px"} onClick={onClick} backgroundColor={"grey"}>Close</Button>
        
        <Seperater />
        <br/>
      <HeaderText>{name}</HeaderText>
      <p>height: {height}</p>
      <p>mass: {mass}</p>
      <p>gender: {gender}</p>
      <p>homeworld: {homeWorld}</p>
    </CardDetailContainer>
  );
};
