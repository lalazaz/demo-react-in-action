import React from 'react';

const Navigation = () => {
    return (
        <div>
            <h2>Navigation</h2>
            <ul>
                <li><a href="/">Home</a></li> {/* 外部链接 */}
                <li><a href="/about">About</a></li> {/* 外部链接 */}
                <li><a href="/contact">Contact</a></li> {/* 外部链接 */}
                <li><a href="/internal">Internal Page</a></li> {/* 内部链接 */}
                <li><a href="https://www.baidu.com">External Link</a></li> {/* 外部链接 */}
            </ul>
        </div>
    );
}

export default Navigation;