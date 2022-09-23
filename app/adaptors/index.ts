import axios from 'axios';

type ContactParams = {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    company: string,
    website?: string,
    message: string,
    'g-recaptcha-response': string,
}

type ReturnPromise = {
    data: any,
    status: number
}

export const postContactUs = (params: ContactParams): Promise<ReturnPromise> => {
    return new Promise((resolve, reject) => {
        axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}contact-us/`, params).then((res) => {
            console.log(res);
            resolve(res);
        }).catch(reject);
    })
}