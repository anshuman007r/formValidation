export const FORM_FILEDS=[
      {
            error:'First alphabet should be Uppercase',
            id: 'first-name',
            Label:'First Name',
            name: 'firstName',
            type:'text',
      },
      {
            error:'First alphabet should be Uppercase',
            id:'last-name',
            Label:'Last Name',
            name: 'lastName',
            type:'text'
      },
      {
            error:'email should be in this form abc@xyz.com',
            id: 'email',
            Label:'Email',
            name: 'email',
            type:'email'
      },
      {
            error:'Password must contail one Uppercase Alphabet, one lowerCase Alphabet,atleast one number and should have a length more than 7 ',
            id: 'password',
            Label:'Password',
            name: 'password',
            type:'password'
      },
      {
            error:'Both Confirm-Password and Password should match',
            id: 'confirm-password',
            Label:'Confirm-Password',
            name: 'confirmPassword',
            type:'password'
      },
];
export const showState={
      firstName:false,
      lastName:false,
      email:false,
      password:false,
      confirmPassword:false,
           
};
export const regexTest={
      firstName:/^[A-z]{1}[a-zA-z]{2,30}$/,
      lastName:/^[A-z]{1}[a-zA-z]{2,30}$/,
      email:/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
      password:/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)(?=.*[A-Z]+.*)[0-9a-zA-Z]{8,}$/,
      confirmPassword:/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)(?=.*[A-Z]+.*)[0-9a-zA-Z]{8,}$/,

};
