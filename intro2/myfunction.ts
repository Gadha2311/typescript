// error occuring case

// function addnum(num){
//     return num+2
// }
// addnum(5)
// addnum("5")


//right way

// function addnum(num:number){
//     return num+2
// }
// function upper(val:string){
//     return val.toUpperCase()
// }
// addnum(5)
// upper("5")


//signupuser [error case]

// function signupuser(name,email,password){}
// signupuser(1,2,3)


// signupuser[correct way]

// function signupuser(name:string,email:string,password:number){}
// signupuser("gadha","gadha@gmail.com",345)


//if you want to use 2 parameters case 

// let loginUser = (name:string,email:string, ispaid:boolean =false)=>{}
// loginUser("ga","h@gmail.com")


// const hero=["thoru","tarson"]
// hero.map((heros):string=>{
//     return `heros is ${heros}`
// })

function consoleError(errmsgg:string):void{
    console.log(errmsgg);
    
}

function handleError(errmsgg:string):never {
   throw new Error(errmsgg)
    
}

export{}