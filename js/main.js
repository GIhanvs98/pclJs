let userArr=[];
let customerArr=[];

class User{
    constructor(fullName,email,password) {
        this.fullName=fullName;
        this.email=email;
        this.password=password;
    }
}

class Customer{
    constructor(name,address,salary,nic) {
        this.name=name;
        this.address=address;
        this.salary=salary;
        this.nic=nic;
    }
}


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
                $('#new-customer-context').show();
                $('#login-context').hide();
                $('#sign-up-context').hide();

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



/*customer management start*/
const createCustomer=()=>{
    const cusomer=new Customer(
            $('#name').val(),
            $('#address').val(),
            parseInt($('#salary').val()) ,
            $('#nic').val()
        );
    let existsCustomer=customerArr.find(cus=>cus.nic===cusomer.nic);
    if (existsCustomer){
        console.log('Client NIC already exists!!!');
        return;
    }

    customerArr.push(cusomer);
    console.log(customerArr);
    getAllCustomers();
    $('#customer-form').trigger('reset');
}

const delteCustomer=(index)=>{
    if (confirm('Are you sure you want to delete this customer?')){
        customerArr.splice(index,1);
        alert('Customer Deleted successfully!!');

        getAllCustomers();
    }
}

const getAllCustomers = () => {
    let tBody = $('#t-body');
    tBody.empty();


    $.each(customerArr, function (i, item) {
        let row = $('<tr>');
        console.log(item)

        let colName = $('<td>').text(item.name);
        let colAddress = $('<td>').text(item.address);
        let colSalary = $('<td>').text(item.salary);
        let colNic = $('<td>').text(item.nic);

        let colOption = $('<td>');
        let  editButton=$('<button>').text('edit').addClass('btn btn-primary')
            .on('click',function (){
                //envoke to the updatecus()
            });
        let  deleteButton=$('<button>').text('delete').addClass('btn btn-danger')
            .on('click',function (){
               delteCustomer(i);
            });

            colOption.append(editButton).append(' ').append(deleteButton);

            row.append(colName,colAddress,colSalary,colNic,colOption);
            tBody.append(row);






    } );
};

/*customer management end*/