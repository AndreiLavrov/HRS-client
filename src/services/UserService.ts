import $api from "src/http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "src/models/response/AuthResponse";
import {IUser} from "src/models/IUser";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users')
    }
}

