export const Add_user =(data)=>{
    return{
        type:'add',
        payload : data
    }
}
export const View_user = () => {
    return{
        type : "view",
    }
}
export const DELETE_USER = (id) => {
    return {
        type : 'del',
        payload : id
    }
} 