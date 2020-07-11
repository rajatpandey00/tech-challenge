import { hot } from 'react-hot-loader/root';
import React from 'react';
import GlobalStyle from '../theme';
import DashBoard from './dashboard';

const App = () => (
    <>
        <DashBoard />
        <GlobalStyle />
    </>
);

export default hot(App);