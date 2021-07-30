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
                { label: "Going to learn React", like: false, important: true, id: "1" },
                { label: "That is so good", like: false, important: false, id: "2" },
                { label: "I need a break", like: false, important: false, id: "3" },
            ],
            term: "",
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleItemList = this.onToggleItemList.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((el) => el.id === id);
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

    searchPost(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    }
    onUpdateSearch(term) {
        this.setState({
            term: term,
        });
    }

    render() {
        const { data, term } = this.state;
        const liked = data.filter((item) => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.searchPost(data, term);

        return (
            <AppBlock>
                <AppHeader liked={liked} allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleItemList}
                    onToggleLiked={this.onToggleItemList}
                />
                <PostAddFrom onAdd={this.addItem} />
            </AppBlock>
        );
    }
}
