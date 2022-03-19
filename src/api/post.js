import request from '@/utils/request'

export function queryPosts(params){
    return request.get('http://localhost:8001/api/posts?page=2',params)
}