import { Comic } from '@/model/response.model';
import { createStore } from 'vuex';

export interface State {
  proxyCors: string;
  lastComicUrl: string;
  data: Comic;
  lastComic: number;
  numberComic: number;
}

export default createStore<State>({
  state: {
    proxyCors: 'https://thingproxy.freeboard.io/fetch/',
    lastComicUrl: 'http://xkcd.com/info.0.json',
    data: {
      month: '',
      num: 1,
      link: '',
      year: '',
      news: '',
      safe_title: 'not comic',
      transcript: '',
      alt: '',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
      title: 'not comic',
      day: '',
    },
    lastComic: 2000,
    numberComic: 0,
  },
  mutations: {
    setData(state: State, response: Comic): void {
      state.data = response;
      state.numberComic = response.num;
    },
    setLastComic(state: State, numberComic: number): void {
      state.lastComic = numberComic;
    },
  },
  actions: {
    async getData({ commit }, endpoint: string): Promise<void> {
      const response = await fetch(`${this.state.proxyCors}${endpoint}`);
      const data = await response.json();
      commit('setData', data);
    },
    async getLastComic({ commit }): Promise<void> {
      const response = await fetch(`${this.state.proxyCors}${this.state.lastComicUrl}`);
      const data: Comic = await response.json();
      commit('setData', data);
      commit('setLastComic', data.num);
    },
  },
  modules: {
  },
});
