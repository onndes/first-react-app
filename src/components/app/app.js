import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddFrom from "../post-add-form";

import "./app.css";

const App = () => {
    const data = [
        { label: "Going to learn Ract", important: true, id: "qew" },
        { label: "That is so good", important: false, id: "eqwxa" },
        { label: "I need a break", important: false, id: "dasxsa" },
    ];

    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddFrom />
        </div>
    );
};

export default App;
