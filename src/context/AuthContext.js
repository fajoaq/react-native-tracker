import AsyncStorage from "@react-native-async-storage/async-storage";

import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'signup':
            return { errorMessage: '', token: action.payload };
        case 'add_error':
            return {...state, errorMessage: action.payload}
        default: return state;
    }
};

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token });

        navigate('TrackList');
    } catch (err) {
        console.log(err);
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up.'})
    }
};


const signin = (dispatch) => {
    return ({ email, password }) => {
        //try to signin

        //handle success by updating state

        //handle failure by showing error
    };
};


const signout = (dispatch) => {
    return () => {
        //sign out
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' }
);