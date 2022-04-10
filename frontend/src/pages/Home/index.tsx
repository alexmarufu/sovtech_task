import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeople } from "../../store/actions/userActions";
import { RootReducerTypes } from "../../store/reducers";
import {
  Button,
  CardDetailContainer,
  Container,
  FlexContainer,
  HeaderText,
  Seperater
} from "../styles";
import { PersonCard, PersonDetailsCard } from "../Section/cards";
import { data } from "./data";
import People from "../Section/people";
import SearchPerson from "../Section/searchPerson";

const Home: FC = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const { people, loading, error } = useSelector(
    (state: RootReducerTypes) => state.user
  );


  const openCard = (index: number) => {
    setCardIndex(index);
    setShowDetails(true);
  };

  if (loading) {
    return (
      <div>
        <HeaderText textAlign="center">Loading</HeaderText>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <HeaderText textAlign="center">{error}</HeaderText>
      </div>
    );
  }

  const pages = (page:number) => {
      switch (page) {
          case 1: 
             return <People/>
          case 2: 
             return <SearchPerson/>
      }
  }


  return (
    <Container>
      <div>
      <FlexContainer  overflowY={"hidden"}>
        <Button onClick={() => setPage(1)}>see Character page</Button>
        <Button onClick={() => setPage(2)}>search page</Button>
      </FlexContainer>
        {pages(page)}
      </div>
    </Container>
  );
};

export default Home;
