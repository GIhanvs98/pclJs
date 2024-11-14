

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
        const fullName=$('#full-Name').val();
        const email=$('#register-email').val();
        const password=$('#register-password').val();


        let createdUser=new User(fullName,email,password);
        let existsUserData=userArr.find(e=>e.email==email);
        if (existsUserData){
            alert('User already registered!!!');
            return;
        }
        userArr.push(createdUser);
        console.log(userArr);

    }

    const login=()=>{
            const email=$('#email').val();
            const password=$('#password').val();
        let existsUserData=userArr.find(e=>e.email==email);
        if (existsUserData){
            if (existsUserData.password===password){
                //-.navigate to the dashboard
                console.log('user credintials match');
            }else {
                alert('password is wrong please enter correct password!!!!');
                return;
            }


        }else{
            alert('User email not found!!!');
        }


    }
/*user management  end*/