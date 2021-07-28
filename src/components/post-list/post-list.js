import React from "react";
import PostListItem from "../post-list-item";
import "./post-list.css";
// import { ListGroup } from "reactstrap";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
    const elements = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleLiked={() => onToggleLiked(id, "like")}
                    onToggleImportant={() => onToggleImportant(id, "important")}
                />
            </li>
        );
    });
    return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
