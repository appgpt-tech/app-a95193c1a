//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    PlayerProfiles: {
      name: 'Player Profiles',
      fields: {
        username: 'Username',
        rating: 'Rating',
        gamesPlayed: 'Games Played',
        linkToFacebookProfile: 'Link To Facebook Profile',
        id: 'id',
      },
    },
    ChessGames: {
      name: 'Chess Games',
      fields: {
        gameState: 'Game State',
        player1: 'Player1',
        player2: 'Player2',
        gameResult: 'Game Result',
        gameStart: 'Game Start',
        gameEnd: 'Game End',
        id: 'id',
      },
    },
    FriendLists: {
      name: 'Friend Lists',
      fields: { friendList: 'Friend List', id: 'id' },
    },
    GameInvites: {
      name: 'Game Invites',
      fields: {
        sender: 'Sender',
        receiver: 'Receiver',
        gameID: 'Game Id',
        inviteStatus: 'Invite Status',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    PlayerProfiles: {
      name: 'Player Profiles (fr)',
      fields: {
        username: 'Username (fr)',
        rating: 'Rating (fr)',
        gamesPlayed: 'Games Played (fr)',
        linkToFacebookProfile: 'Link To Facebook Profile (fr)',
        id: 'id',
      },
    },
    ChessGames: {
      name: 'Chess Games (fr)',
      fields: {
        gameState: 'Game State (fr)',
        player1: 'Player1 (fr)',
        player2: 'Player2 (fr)',
        gameResult: 'Game Result (fr)',
        gameStart: 'Game Start (fr)',
        gameEnd: 'Game End (fr)',
        id: 'id',
      },
    },
    FriendLists: {
      name: 'Friend Lists (fr)',
      fields: { friendList: 'Friend List (fr)', id: 'id' },
    },
    GameInvites: {
      name: 'Game Invites (fr)',
      fields: {
        sender: 'Sender (fr)',
        receiver: 'Receiver (fr)',
        gameID: 'Game Id (fr)',
        inviteStatus: 'Invite Status (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);
