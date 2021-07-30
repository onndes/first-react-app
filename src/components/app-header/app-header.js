import React from "react";
import "./app-header.scss";
import styled from "styled-components";

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    h1 {
        font-size: 26px;
        color: ${(props) => (props.colored ? "red" : "black")};
        :hover {
            text-decoration: underline;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;

const AppHeader = ({ liked, allPosts }) => {
    return (
        // <Header colored as="a">
        <Header>
            <h1>Vlad Vylotnikov</h1>
            <h2>
                Записей {allPosts}, из них понравилось {liked}
            </h2>
        </Header>
    );
};

export default AppHeader;
