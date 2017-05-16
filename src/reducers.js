import { combineReducers } from 'redux';

import { STYLE_LIGHT, STYLE_DARK } from './actions';

const initialInfo = {
    content: "is a communications designer based in Melbourne Australia.  " + 
    "Currently working at <a href=\"http://www.round.com.au\">Studio Round</a>. " + 
    " <br/><br/> For any portfolio or freelance enquiries, please <a href=\"mailto:florenceltf@gmail.com\">email</a>. " +
    " For any other enquiries, still please <a href=\"mailto:florenceltf@gmail.com\">email</a>.",
    contact: "<a href=\"mailto:florenceltf@gmail.com\">Contact</a> " +
    " <br/><a href=\"http://www.instagram.com/florenceltf\">Instagram</a> " +
    " <br/><a href=\"https://www.linkedin.com/in/florenceltf\">Linkedin</a> "
}

function info(state = initialInfo, action) {
    return state;
}

const initialGallery = {
    content: [
        {
            src: "https://s3-ap-southeast-2.amazonaws.com/florenceltfbucket/images/FlorenceLTF_Supernormal.jpg",
            title: "Supernormal Cookbook"
        },
        {
            src: "https://s3-ap-southeast-2.amazonaws.com/florenceltfbucket/images/FlorenceLTF_Japan_1.jpg",
            title: "Japan 2017"
        },
          {
            src: "https://s3-ap-southeast-2.amazonaws.com/florenceltfbucket/images/FlorenceLTF_MFWF.jpg",
            title: "Melbourne Food and Wine Festival 2016"
        },
          {
            src: "https://s3-ap-southeast-2.amazonaws.com/florenceltfbucket/images/FlorenceLTF_Japan_2.jpg",
            title: "Japan 2017"
        },
           {
            src: "https://s3-ap-southeast-2.amazonaws.com/florenceltfbucket/images/FlorenceLTF_Meatsmith.jpg",
            title: "Meatsmith"
        },
               {
            src: "https://s3-ap-southeast-2.amazonaws.com/florenceltfbucket/images/FlorenceLTF_Japan_3.jpg",
            title: "Japan 2017"
        },
                 {
            src: "https://s3-ap-southeast-2.amazonaws.com/florenceltfbucket/images/FlorenceLTF_RickyandPinky.jpg",
            title: "Ricky and Pinky"
        },
                   {
            src: "https://s3-ap-southeast-2.amazonaws.com/florenceltfbucket/images/FlorenceLTF_Japan_4.jpg",
            title: "Japan 2017"
        },
          {

            src: "https://s3-ap-southeast-2.amazonaws.com/florenceltfbucket/images/FlorenceLTF_Yoga.jpg",
            title: "Yoga Illustration"
        },
          {

            src: "https://s3-ap-southeast-2.amazonaws.com/florenceltfbucket/images/FlorenceLTF_Japan_5.jpg",
            title: "Japan 2017"
        },
          {
            src: "https://s3-ap-southeast-2.amazonaws.com/florenceltfbucket/images/FlorenceLTF_SweetCaroline.jpg",
            title: "Sweet Caroline"
        },
          {

            src: "https://s3-ap-southeast-2.amazonaws.com/florenceltfbucket/images/FlorenceLTF_Japan_7.jpg",
            title: "Japan 2017"
        },

            {

            src: "https://s3-ap-southeast-2.amazonaws.com/florenceltfbucket/images/FlorenceLTF_LovingEarth.jpg",
            title: "Loving Earth Packaging"
        },
            {

            src: "https://s3-ap-southeast-2.amazonaws.com/florenceltfbucket/images/FlorenceLTF_Japan_6.jpg",
            title: "Japan 2017"
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
        return LIGHT;
    case STYLE_DARK:
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
