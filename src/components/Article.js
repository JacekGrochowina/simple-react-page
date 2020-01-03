import React from 'react';

const Article = (props) => {

    const styles = {
        marginTop: "40px",
        fontSize: "16px"
    }

    return (
        <article style={styles}>
            <h3 style={{
                marginBottom: 5,
                textTransform: "uppercase"
            }}>{props.title}</h3>
            <span style={{
                display: "block",
                marginBottom: 10,
                fontSize: "0.8em",
                fontStyle: "italic"
            }}>{props.author}</span>
            <p>{props.text}</p>
        </article>
    )
}

export default Article;