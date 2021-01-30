import axios from 'axios';
import Cookies from 'js-cookie';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    onclick: null,
    showDuration: 400,
    hideDuration: 1000,
    timeOut: 7000,
    extendedTimeOut: 3500,
    showEasing: 'swing',
    hideEasing: 'swing',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
};
const Axios = () => {
    const authToken = Cookies.get('ACCESS_TOKEN');
    let instance = axios.create();
    // comment if using serverProxy
    //instance.defaults.withCredentials = true;
    //instance.defaults.baseURL = process.env.REACT_APP_API_URL;
    instance.defaults.timeout = 1000 * process.env.REACT_APP_API_TIMEOUT;
    instance.defaults.headers.common['Content-Type'] = 'application/json';
    if (authToken) {
        instance.defaults.headers.common['Authorization'] = `bearer ${authToken}`;
    }
    instance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response.status === 401) {
                toastr.warning('unathorize login access, please try again!');
                setTimeout(() => {
                    Cookies.remove('ACCESS_TOKEN', { path: '/' });
                    window.location.replace('/login');
                }, 5000);
            }
            let code,
                status,
                message = '';
            if (error.response) {
                code = error.response.status;
                status = error.response.statusText;
                message = error.response.data.detail
                    ? error.response.data.detail : error.response.data.title
                        ? error.response.data.title : error.response.data.message
                            ? error.response.data.message : error.response.statusText;
            } else {
                code = status = message = error.message;
            }
            let errorData = { code, status, message };
            throw errorData;
        }
    );
    return instance;
};

const execString = str => {
    return str.replace(matches => matches[1].toUpperCase());
};

class API {
    constructor() {
        this.endpoints = {};
    }

    createEntity(entity) {
        const name = execString(entity.name);
        this.endpoints[name] = this.createBasicCRUDEndpoints(entity);
    }

    createEntities(arrayOfEntity) {
        const MultipleEndpoints = arrayOfEntity.join('/');
        const name = execString(MultipleEndpoints);
        this.endpoints['entities'] = this.createBasicCRUDEndpoints({ name });
    }

    createBasicCRUDEndpoints({ name }) {
        let endpoints = {};
        let resourceURL = `/${name}`;

        endpoints.getAll = () => Axios().get(resourceURL);
        endpoints.getOne = (config = {}) => Axios().get(`${resourceURL}`, config);
        endpoints.create = (config = {}) => Axios().post(resourceURL, config);
        endpoints.update = (config = {}) => Axios().put(resourceURL, config);
        endpoints.updateById = (id, config = {}) => axios.put(`${resourceURL}/${id}`, config);
        endpoints.delete = (id, config = {}) => axios.delete(`${resourceURL}/${id}`, config);

        return endpoints;
    }
}

export const Setup = new API();
