import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddFrom from "../post-add-form";

// import "./app.css";
// import style from "./App.module.scss";
import styled from "styled-components";

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: "Going to learn Ract", important: true, id: "qew" },
                { label: "That is so good", important: false, id: "eqwxa" },
                { label: "I need a break", important: false, id: "dasxsa" },
            ],
        };
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((el) => (el.id = id));
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];
            return {
                data: newArr,
            };
        });
    }

    render() {
        return (
            <AppBlock>
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList posts={this.state.data} onDelete={this.deleteItem} />
                <PostAddFrom />
            </AppBlock>
        );
    }
}
