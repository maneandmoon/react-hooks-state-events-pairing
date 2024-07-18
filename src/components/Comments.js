import React from "react";

function Comments ({curComment}) {
    return (
        <>
        <strong>{curComment.user}</strong>
        <p>{curComment.comment}</p>
        </>
    ) 
};
export default Comments;