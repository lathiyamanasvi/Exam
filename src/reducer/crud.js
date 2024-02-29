let init = {
    user : JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

};

const crud =(state = init,action)=>{
    switch (action.type) {
        case 'add':
            let data = action.payload;
            let rec = [...state.user,data];
            console.log(rec);
            localStorage.setItem('user', JSON.stringify(rec))
            return{
                ...state,
                user : rec
            }
        case 'view' : 
            return state;

        case 'del':
                let id = action.payload
                let remove = state.user.filter((val)=>{
                    return val.id !== id
                })
                localStorage.setItem("user",JSON.stringify(remove))
                return{
                    ...state,
                    user:remove
                }

        
    default:
        return state    
    }
}
export default crud;