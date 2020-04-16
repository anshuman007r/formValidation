export const showState={
    firstName:false,
    lastName:false,
    email:false,
    password:false,
    confirmPassword:false,
         
};
export const regexTest={
    firstName:/^[A-Z]{1}[a-zA-Z]{2,30}$/,
    lastName:/^[A-Z]{1}[a-zA-Z]{2,30}$/,
    email:/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
    password:/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)(?=.*[A-Z]+.*)[0-9a-zA-Z]{8,}$/,
    confirmPassword:/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)(?=.*[A-Z]+.*)[0-9a-zA-Z]{8,}$/,

};