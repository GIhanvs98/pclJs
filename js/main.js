

class User{
    constructor(fullName,email,password) {
        this.fullName=fullName;
        this.email=email;
        this.password=password;
    }
}
let userArr=[];

/*user management  start*/
    const createUser=()=>{
        let createdUser=new User('','','');
        let existsUserData=userArr.find(e=>e.email=='');
        if (existsUserData){
            alert('User already registered!!!');
            return;
        }
        userArr.push(createdUser);

    }
/*user management  end*/