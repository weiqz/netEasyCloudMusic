import axios from 'axios'

const request = url => {
    return axios.get(url)
}

export const getIndexBanner = type => {
    let url = `/banner?type=${type}`
    return request(url)
}

export const getpersonalized = limit => {
    let url = `/personalized?limit=${limit}`
    return request(url)
}

export const privatecontent = () => {
    let url = '/personalized/privatecontent'
    return request(url)
}

export const djprogram = () => {
    let url = '/personalized/djprogram'
    return request(url)
}

export const newsong = () => {
    let url = '/personalized/newsong'
    return request(url)
}