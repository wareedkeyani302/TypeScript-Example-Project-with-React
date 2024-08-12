import axios from "axios";
import { FC, SetStateAction, useState } from "react";
import User from "./User";
import { AppProps, Users } from './App.types';
import { Button, Input } from "antd";

const App: FC<AppProps> = ({ title }) => {
  const [users, setUsers] = useState<Users[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [userName, setUserName] = useState ('');
  const [searchUser, setSearchUser] = useState ('');

  const handleShowUsers = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get('https://randomuser.me/api/?results=10');
      setUsers(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearchUser (event.target.value)
  }
  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchUser.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>{title}</h1>
      <div className="username">
      <Button onClick={handleShowUsers} loading={isLoading}>Show Users</Button>
      <Input type="text" onChange={handleChange} style={{width: '50%'}} />
      </div>
      {/* <div className="user-text">{userName}</div> */}
      <ul className="user-grid">
        {filteredUsers.map(({ login, name, email, gender, phone, picture, id }) => (
          <User
            key={login.uuid}
            name={name}
            email={email}
            gender={gender}
            phone={phone}
            id={id}
            picture={picture}
          />
        ))}
      </ul>
    </div>
  
  );
};

export default App;

