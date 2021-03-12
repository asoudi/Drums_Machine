import { createStore, combineReducers  } from 'redux'

const CLICKED = 'CLICKED';
const VOLCHANGE = 'VOLCHANGE';
const BANK = 'BANK';
const ONOFF = 'ONOFF';

export const ButtonClicked = (btn_id) =>{
    return {
        type: CLICKED,
        id: btn_id
    }
}

const def_btn = {
    id: ''
}

export const BankActivate = () => {
    return {
        type: BANK
    }
}

export const OnOff = () => {
    return {
        type: ONOFF
    }
}

export const VolumeChanged = (val) =>{
    return {
        type: VOLCHANGE,
        num: val
    }
}

const def_vol = {
    num: 0
}

const ButtonClickedReducer = (state=def_btn, action) => {
    switch(action.type){
        case CLICKED:
            return {id: action.id};
        default:
           return state;
    }
}

const BankActivateReducer = (state = 0, action) => {
    switch(action.type){
        case BANK:
            return !state;
        default:
           return state;
    }
}

const OnOffReducer = (state = 1, action) => {
    switch(action.type){
        case ONOFF:
            return !state;
        default:
           return state;
    }
}

const VolumeChangedReducer = (state=def_vol, action) => {
    switch(action.type){
        case VOLCHANGE:
            return {num: action.num};
        default:
           return state;
    }
}

const rootReducer = combineReducers({
    btn: ButtonClickedReducer,
    vol: VolumeChangedReducer,
    bank: BankActivateReducer,
    pwr: OnOffReducer
  });

  export const reduxStore = createStore(rootReducer);