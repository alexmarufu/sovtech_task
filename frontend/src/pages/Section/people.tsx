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
import { PersonCard, PersonDetailsCard } from "./cards";


const People: FC = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const { people, loading, error } = useSelector(
    (state: RootReducerTypes) => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
      if(people.length ===0) {
        fetchPeople()
      }
  }, []);

  const getPeopleQuery = `
  {
      getPeople(page: ${page}) {
            name
            height
            mass
            hair_color
            skin_color
            eye_color
            birth_year
            gender
          }
    }
    `;

  const openCard = (index: number) => {
    setCardIndex(index);
    setShowDetails(true);
  };

  const closeCard = () => setShowDetails(false);

 
  const fetchPeople = () => {
    dispatch(getPeople(getPeopleQuery));
  };

  const prevPage = () => {
    if(page === 1) return
    setPage((prev) => prev - 1);
    dispatch(getPeople(getPeopleQuery));
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
    dispatch(getPeople(getPeopleQuery));
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


  return (
    <>
      <Seperater />
      <HeaderText textAlign="center">Starwars Characters</HeaderText>
      <Seperater />
      <FlexContainer>
        {people?.map(({ name, height, gender, mass, homeworld }, index) => (
          <>
            <PersonCard
              key={name}
              name={name}
              gender={gender}
              onClick={() => openCard(index)}
            />
            {showDetails && cardIndex === index && (
              <PersonDetailsCard
                        name={name}
                        height={height}
                        onClick={closeCard} 
                        gender={gender}
                        mass={mass} 
                        homeWorld={homeworld}              />
            )}
          </>
        ))}
      </FlexContainer>
      <Seperater />
      <br />
      <FlexContainer>
        <Button onClick={prevPage}>previous</Button>
        <HeaderText textAlign="center">{page}</HeaderText>
        <Button onClick={nextPage}>next</Button>
      </FlexContainer>
    </>
  );
};

export default People;
