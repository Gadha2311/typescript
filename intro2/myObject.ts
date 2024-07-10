// const User={
//     name:"gadha",
//     email:"gadha@gmail.com",
//     isActive:true
// }


// function createUser({name:string, isPaid:boolean}){}
// this causes error 
// createUser({name:"gadha",isPaid:true,email:"gadha@gmail.com"})
// to avoid that error we use this way
// let newUser={name:"gadha",isPaid:true,email:"gadha@gmail.com"}
// createUser(newUser)


// type User={
//     name:string;
//     email:string;
//     isActive:boolean;
// }

// function createUser(user:User):User{
//   return {name:"",email:"",isActive:true}
// }

// createUser({name:"",email:"",isActive:true})



//READONLY AND OPTIONAL 

// type User={
//     readonly _id:string
//     name:string;
//     email:string;
//     isActive:boolean;
//optional
//     creadcardDetails?:number 
// }


// let myUser : User={
//     _id:"12345",
//     name:"gadha",
//     email:"h@h.com",
//     isActive:true
// }



// myUser.email="hah@gmail.com"
//due to readonly we cant change it 
// myUser._id="3455"   
// function createUser (u:User){
//     return
// }

//mix and match of type

type cardNumber={
    cardNumber:string
}

type cardDate={
    cardDate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number 
}

export{}
