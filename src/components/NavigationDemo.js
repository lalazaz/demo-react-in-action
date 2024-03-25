import React from 'react';

const Navigation = () => {
    return (
        <div className={"container"}>
            <div className={"navigation"}>
                <li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/internal">Internal Page</a></li>
                    <li><a href="https://www.baidu.com">External Link</a></li>
                    <li><a href="/MovieInfo.js">myProject</a></li>
                </li>
            </div>
            <div class={"form"}>
                <label htmlFor="name">Name:</label><br/>
                <input type="text" id="name" name="name"/><br/>
                <label htmlFor="email">Email:</label><br/>
                <input type="email" id="email" name="email"/><br/><br/>
                <input type="submit" value="Submit"/>
            </div>
        </div>
    );
}

export default Navigation;