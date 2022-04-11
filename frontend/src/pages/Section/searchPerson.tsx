import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeople, getPerson } from "../../store/actions/userActions";
import { RootReducerTypes } from "../../store/reducers";
import {
  Button,
  CardDetailContainer,
  Container,
  FlexContainer,
  HeaderText,
  Input,
  Seperater
} from "../styles";
import { PersonCard, PersonDetailsCard } from "./cards";
import people from "./people";


const SearchPerson: FC = () => {
  const [name, setName] = useState<string>("");
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [cardIndex, setCardIndex] = useState<number>(0);
 

  const openCard = (index: number) => {
    setCardIndex(index);
    setShowDetails(true);
  };

  const closeCard = () => setShowDetails(false);

  const { person, loading, error } = useSelector(
    (state: RootReducerTypes) => state.user
  );

  const dispatch = useDispatch();
  console.log(typeof name)
  const getPersonQuery = `{
  getPerson(name: "${name}") {
    name
    height
    mass
    gender
    homeworld
  }
}
  `;

 

  const submit = (index: number) => {
    //setCardIndex(index);
    //setShowDetails(true);
    dispatch(getPerson(getPersonQuery));
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
      <HeaderText textAlign="center">Search Characters</HeaderText>
      <Seperater />
     
      <FlexContainer>
        <input
         value={name}
         placeholder={"search person"}
         onChange={(e:ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
         type="text"
         style={{
           border: `1px solid #d3d3d3}`,
           padding: "8px",
           borderRadius: "20px",
           width: "500px",
           margin: "10px",
         }}
        />
        <div>
        <Button onClick={submit}>submit</Button></div>  
      </FlexContainer>
      <br />
      {person.length === 0 ? (
          <p>no data start seaching</p>
      ) : (
      <>
      {person?.map(({ name, height, gender, mass, homeworld }, index) => (
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
                        homeWorld={homeworld}  
              />
            )}
          </>
        ))}
      </>
      )}
      <br />  
    </>
  );
};

export default SearchPerson;
