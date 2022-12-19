import * as type from "./actionTypes"
const initialState = {
  userData:JSON.parse(localStorage.getItem("user"))||{},
  isAuth: localStorage.getItem("isAuth")||false,
  token:localStorage.getItem("token")||"",
  isLoading: false,
  isError: false,
  isLogout:false,
};

const reducer = (state = initialState,action) => {
          switch(action.type){
            case type.LOGIN_REQUEST :
              return{
                ...state,
                isLoading:true,
                isError:false,
                isAuth:false,
              }
            case type.LOGIN_SUCCESS:
              localStorage.setItem("user",JSON.stringify(action.payload.data))
              localStorage.setItem("token",`baer ${action.payload.token}`)
              localStorage.setItem("isAuth",true)
              return{
                ...state,
                isLoading:false,
                isError:false,
                isAuth:true,
                token:action.payload.token,
                userData:action.payload.data,

                }
            case type.LOGIN_FAILURE:
              return {
                ...state,
                isLoading:false,
                isError:true,
                isAuth:false,
                userData:{}
              }
            
            case type.LOGOUT_SUCCESS:
              localStorage.setItem("user",JSON.stringify({}))
              localStorage.setItem("token","")
              localStorage.setItem("isAuth",false)
              return{
                ...state,
                userData:{},
                isAuth:false,
                token:"",
                isLoading:false,
                isError:false,
                isLogout:true,
              }
            default:
              return state;
          }
  
};

export { reducer };