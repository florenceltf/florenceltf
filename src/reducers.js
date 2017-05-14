import { combineReducers } from 'redux';

import { STYLE_LIGHT, STYLE_DARK } from './actions';

const initialInfo = {
    content: "is a <br/>communications designer based in Melbourne Australia, currently working at <a href=\"http://www.round.com.au\">Studio Round</a>.",
    contact: "Hello this<br /> is the contact div."
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

const LIGHT = "light";
const DARK = "dark";

function style(state = LIGHT, action) {
    switch(action.type) {
    case STYLE_LIGHT:
        console.log(STYLE_LIGHT)
        return LIGHT;
    case STYLE_DARK:
        console.log(STYLE_DARK)
        return DARK;
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    info,
    gallery,
    style,
});

export default rootReducer;
