import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddFrom from "../post-add-form";

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
                { label: "Going to learn Ract", like: false, important: true, id: "1" },
                { label: "That is so good", like: false, important: false, id: "2" },
                { label: "I need a break", like: false, important: false, id: "3" },
            ],
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleItemList = this.onToggleItemList.bind(this);

        this.maxId = 4;
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

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++,
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    }

    onToggleItemList(id, item) {
        this.setState(({ data }) => {
            const index = data.findIndex((item) => item.id === id);
            const old = data[index];
            const newItem = { ...old, [item]: !old[item] };
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, newItem, ...after];

            return {
                data: newArr,
            };
        });
    }

    render() {
        const { data } = this.state;
        const liked = data.filter((item) => item.like).length;
        const allPosts = data.length;

        return (
            <AppBlock>
                <AppHeader liked={liked} allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    // onToggleImportant={this.onToggleImportant}
                    // onToggleLiked={this.onToggleLiked}
                    onToggleImportant={this.onToggleItemList}
                    onToggleLiked={this.onToggleItemList}
                />
                <PostAddFrom onAdd={this.addItem} />
            </AppBlock>
        );
    }
}
