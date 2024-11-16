import { BASE_URL } from "./base_url";

import commonrequest from "./commonApi";

export const addEmploy=async(body)=>{
    return await commonrequest("POST",`${BASE_URL}/register`,body,'')
}

export const viewEmploy=async()=>{
    return await commonrequest('GET',`${BASE_URL}/get`,'','')
}

export const deleteEmploy=async(id)=>{
    return await commonrequest('DELETE',`${BASE_URL}/delete/${id}`,{},'')
}

export const editEmploy=async(id,body)=>{
    return await commonrequest('PUT',`${BASE_URL}/edit/${id}`,body,'')
}