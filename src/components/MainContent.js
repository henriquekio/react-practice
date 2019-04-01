import React from 'react'

export const MainContent = (props) => {
    return (
        <div className={"container-form"}>
            <h1 className={"text-center"}>Add your task</h1>
            <br/>
            {props.children}
        </div>
    )
}