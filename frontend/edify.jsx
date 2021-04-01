import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';
import { FetchPlaylist } from "./actions/playlist_actions";



   

    document.addEventListener("DOMContentLoaded", () => {
        const root = document.getElementById("root");
        let store;


        if (window.currentUser) {
            const preloadedState = {
                entities: {
                    users: { [window.currentUser.id]: window.currentUser }
                },
                session: { id: window.currentUser.id }
            };
            store = configureStore(preloadedState);
            delete window.currentUser;
        } else {
            store = configureStore();
        }
        window.getState = store.getState;
        window.dispatch = store.dispatch;

       

        window.FetchPlaylist = FetchPlaylist;
        ReactDOM.render(
            <Root store={store} />, root);
    });

