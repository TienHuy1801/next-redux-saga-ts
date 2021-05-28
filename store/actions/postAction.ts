import { SELECT_PERSON, RECEIVE_PEOPLE, FETCH_PEOPLE, LOAD_USERS_LOADING } from './../types';

export const selectPerson = (id: Number) => ({
  type: SELECT_PERSON,
  payload: id
});

export const receivePeople = people => ({
  type: RECEIVE_PEOPLE,
  payload: people
});
