import {BEARER} from '../constants/user.constants';

export const isUserLoggedIn = () => localStorage.getItem(BEARER) !== undefined;