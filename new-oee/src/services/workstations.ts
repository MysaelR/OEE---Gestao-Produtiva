import api from "./api";
import axios from "axios";

export async function listWorkstationsBegin(){
    try {
        const response : any = await api.get("/machine/dashboard/list", {params: {itens_per_page: 500, page: 0}});
        return response.data;
    } catch (error: any) {
        return error.response.data.message ? error.response.data.message : error.message;
    }
}