import React from 'react';
import { Link } from 'react-router-dom';

const LinkMenu = () => (
    <>
        <ul>
            <li>
                <Link to="/home">首頁</Link>
            </li>
            <li>
                <Link to="/about">關於</Link>
            </li>
            <li>
                <Link to="/news">新聞</Link>
            </li>
            <li>
                <Link to="/demo">展示</Link>
            </li>
            <li>
                <Link to="/contacts">聯繫人</Link>
            </li>
            <li>
                <Link to="/products">產品</Link>
            </li>
        </ul>
    </>
);
export default LinkMenu;