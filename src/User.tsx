import { FC } from "react";
import { Id, Name, Picture } from "./App.types";

interface UserProps {
    name: Name;
    email: string;
    phone: number;
    id: Id;
    gender: string;
    picture: Picture;
}

const User: FC<UserProps> = ({ name, email, phone, id, gender, picture }) => {
    return (
        <li className="user-card">
            <div className="image">
                <img src={picture.medium} alt="User" />
            </div>
            <div className="user-info">
                <div className="id-section">
                    Id: {id.name} {id.value}
                </div>
                <div className="name-section">
                    Name: {name.title} {name.first} {name.last}
                </div>
                <div className="email">Email: {email}</div>
                <div className="gender">Gender: {gender}</div>
                <div className="phone">Phone: {phone}</div>
            </div>
        </li>
    );
};

export default User;
