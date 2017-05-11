import { combineReducers } from 'redux';

const initialInfo = {
    content: "Hi I'm Flo Flo"
}

function info(state = initialInfo, action) {
    return state;
}

const initialGallery = {
    content: [
        {
            src: "https://i.giphy.com/WiXMlla4ZFR8Q.gif",
            title: "Flo flo the bunny"
        },
        {
            src: "https://i.giphy.com/VAzhi9GfotTXy.gif",
            title: "I get excited sometimes..."
        }
    ]
}

function gallery(state = initialGallery, action) {
    return state;
}

const rootReducer = combineReducers({
    info,
    gallery,
});

export default rootReducer;
