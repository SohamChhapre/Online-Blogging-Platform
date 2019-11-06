import Axios from 'axios';

import config from '../config';

const { validateAll } = window;

export default class ArticlesService {
  async getArticles(url = `${config.apiUrl2}/articles`) {
  
    const response = await Axios.get(url);
    console.log("service",response);
    return response.data;
       }

    async getSingleArticle(endpoint) {
        const response = await Axios.get(`${config.apiUrl2}/article/${endpoint}`);
        console.log(response)
        return response.data;
    }
    async getUserArticles(user){

      const response=await Axios.get(`${config.apiUrl2}/article/${user}`);
      return response.data;

    }

    async deleteArticle(id) {
      await Axios.delete(`${config.apiUrl2}/article/${id}`);

    }
  }