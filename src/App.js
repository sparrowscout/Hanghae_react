
import React from "react";
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { loadDictionaryFB, removeDictionaryFB } from "./redux/modules/dictionary"
import { useDispatch, useSelector } from "react-redux"
import { Route, useHistory, Switch } from "react-router-dom";
import styled from "styled-components";
import './App.css';
import AddWord from './AddWord';
import BasicSpeedDial from './speedDial';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button } from "@mui/material";


function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const my_dictionary = useSelector((state) => state.dictionary.list);

  React.useEffect(() => {
    dispatch(loadDictionaryFB())
  }, []);

  const deletedictionary = () => {
    dispatch(removeDictionaryFB(my_dictionary[list.id]))
    history.goBack();
}


  return (

    <div className="App">
      <Header>
        인터넷 백과사전
      </Header>
      <Switch>
        <div style={{width:"90vw", margin:"auto"}}>
           <Route path="/" exact>
          <CardContainer>
            {my_dictionary.map((list, index) => {
              return <DictCard completed={list.completed} key={index}>
              
              <div>
                 <CardWord>{list.word}</CardWord> 
                <span>의미 또는 출처</span><br />
                <CardWordMean>{list.mean}</CardWordMean>
                <span>사용예시</span><br />
                <CardWordRef>{list.reference}</CardWordRef>
              </div>
               <DeleteButton> X </DeleteButton>
              </DictCard>
            })}

          </CardContainer>

        </Route>
       


        <Route path="/addword" exact>
          <AddWord />
        </Route>
        </div>
          



      </Switch>


      <BasicSpeedDial />
    </div>
  );
}

const Header = styled.header`
height: 55px;
border-bottom: 1px solid #0081ed;
font-size: 30px;
font-weight: bold;
top: 0;
left: 0;
right: 0; 
background-color: #fff;
padding-top: 20px;
position: fixed;
`;

const CardContainer = styled.div`

/* margin: auto; */
/* justify-content: center; */

margin-top: 85px; 
//display: flex;
/* flex-wrap: wrap; */
/*@media screen and (min-width: 1024px) {
  background-color: aliceblue;
} */

display: grid;
grid-template-columns: 1fr 1fr 1fr;

@media screen and (max-width: 700px) {
  grid-template-columns: 1fr 1fr};

  @media screen and (max-width: 550px) {
  grid-template-columns: 1fr};

`;



const DictCard = styled.div`

height: 150px;
border: 1px solid #0081ed;
border-radius: 10px;
margin: 10px;
padding: 20px;
padding-bottom: 40px;

text-align: left;
overflow: scroll;
display: grid;
grid-template-columns: 9fr 1fr;
/* flex-basis: 25vw;

flex-grow: 0;

-webkit-box-pack: start;
justify-content: flex-start;
width: 100%; */

/* -webkit-box-pack: start;
justify-content: flex-start; */


span {
  font-size: 14px;
  text-decoration: underline;
}
`;

const DeleteButton = styled.div`
width: 20px;
height: 20px;
margin-top: 8px;
text-align: right;

`;

const CardWord = styled.div`
font-size: 30px;
font-weight: bold;
margin-bottom: 10px;
`;

const CardWordRef = styled.div`
margin-top: 5px;
font-size: 15px;
color: #0081ed;
`;

const CardWordMean = styled.div`
margin-top: 5px;
margin-bottom: 10px;
`;



export default App;
