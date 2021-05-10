import React, {FC} from "react";
import { MainPage } from "./components/MainPage/MainPage";

export interface IRandomNumber {
    id: number;
  }

const App: FC = () => {
  const randomId = Math.floor(Math.random()*10);

    return (
        <MainPage id={randomId}/>
    )
};

export default App;