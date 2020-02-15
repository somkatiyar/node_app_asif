var employee = [{
        empcode: 'A102',
        name: 'James',
        age: 37,
        gender: 'Male',
        department: 'Finance',
        designation: 'Manager',
        salary: 65000
    },
    {
        empcode: 'A106',
        name: 'Mary',
        age: 24,
        gender: 'Female',
        department: 'Technology',
        designation: 'VicePresident',
        salary: 68000
    },
    {
        empcode: 'A122',
        name: 'Bob',
        age: 23,
        gender: 'Male',
        department: 'Marketing',
        designation: 'Manager',
        salary: 51000
    },
    {
        empcode: 'A088',
        name: 'Julia',
        age: 33,
        gender: 'Female',
        department: 'Finance',
        designation: 'VicePresident',
        salary: 70000
    },
    {
        empcode: 'A055',
        name: 'Steve',
        age: 27,
        gender: 'Male',
        department: 'Technology',
        designation: 'Manager',
        salary: 53000
    },
    {
        empcode: 'A208',
        name: 'Katherine',
        age: 29,
        gender: 'Female',
        department: 'Marketing',
        designation: 'Manager',
        salary: 61000
    },
    {
        empcode: 'A181',
        name: 'Edwards',
        age: 31,
        gender: 'Male',
        department: 'Finance',
        designation: 'Trainee',
        salary: 49000
    },
    {
        empcode: 'A029',
        name: 'Margaret',
        age: 32,
        gender: 'Female',
        department: 'Technology',
        designation: 'President',
        salary: 53000
    },
    {
        empcode: 'A029',
        name: 'Bill',
        age: 27,
        gender: 'Male',
        department: 'Operations',
        designation: 'Manager',
        salary: 58000
    }
]

var contant;
var selectedDepartment;
var selectedDsignation;
var selectedGender;
var fullDum;
var partialDum;
var globalEmpObj;

deptChange = false;
degChange = false;
genderChange = false;






function onLoad() {
    globalEmpObj = '';
    document.getElementById('showEmp').style.display = 'none';
    document.getElementById('addEmp').style.display = 'none';
    document.getElementById('fullDump').style.display = "none";
    document.getElementById('partialDump').style.display = "none";



}


function getAllEmployee() {
   
    document.getElementById('fullDump').style.display = "none";
    document.getElementById('showEmp').style.display = 'block';
    document.getElementById('addEmp').style.display = 'none';
    document.getElementById('partialDump').style.display = "none";

    var x = document.getElementById('departmentSearch');
    x.value = ""
    var y = document.getElementById('designationSearch');
    y.value = ""
    // document.getElementById('isAddDept').style.display = 'block';
    // document.getElementById('isEditDept').style.display = 'none';
    // document.getElementById('isAddDeg').style.display = 'block';
    // document.getElementById('isEditDeg').style.display = 'none';

    document.getElementById('tablecontant').innerHTML = "";
    contant = '';
    employee.forEach(element => {

        contant += '<tr onclick="editEmployee(this)"><td>' + element.empcode + '</td><td>' + element.name + '</td><td>' + element.age + '</td><td>' + element.gender + '</td><td>' + element.department + '</td><td>' + element.designation + '</td><td>' + element.salary + '</td><td>' + '<button  >Edit</button>' + '</td></tr>';
    });
    globalEmpObj = employee;
    document.getElementById('tablecontant').innerHTML = contant;
}





function onChangeDepartment(event) {
    selectedDepartment = event;
    deptChange = true;
}

function onChangeDesignation(event) {
    selectedDsignation = event;
    degChange = true;
}

function onChangeGender(event) {

    selectedGender = event;
    genderChange = true;
}

function filterEmployee() {

    if (selectedDepartment && selectedDsignation) {
        document.getElementById('tablecontant').innerHTML = "";
        contant = '';
        var temp;
        temp = employee.filter(item => {
            return ((item.department === selectedDepartment) && (item.designation === selectedDsignation))
        });
        globalEmpObj = temp;
        temp.forEach(element => {
            contant += '<tr onclick="editEmployee(this)"><td>' + element.empcode + '</td><td>' + element.name + '</td><td>' + element.age + '</td><td>' + element.gender + '</td><td>' + element.department + '</td><td>' + element.designation + '</td><td>' + element.salary + '</td><td>' + '<button onclick="editEmployee()">Edit</button>' + '</td></tr>';
        });
        document.getElementById('tablecontant').innerHTML = contant;
        temp = ''
    } else if (selectedDepartment) {
        document.getElementById('tablecontant').innerHTML = "";
        contant = '';
        var temp;
        temp = employee.filter(item => {
            return item.department === selectedDepartment
        });
        globalEmpObj = temp;
        temp.forEach(element => {
            contant += '<tr onclick="editEmployee(this)"><td>' + element.empcode + '</td><td>' + element.name + '</td><td>' + element.age + '</td><td>' + element.gender + '</td><td>' + element.department + '</td><td>' + element.designation + '</td><td>' + element.salary + '</td><td>' + '<button onclick="editEmployee()">Edit</button>' + '</td></tr>';
        });
        document.getElementById('tablecontant').innerHTML = contant;
        temp = ''
    } else if (selectedDsignation) {
        document.getElementById('tablecontant').innerHTML = "";
        contant = '';
        var temp;
        temp = employee.filter(item => {
            return item.designation === selectedDsignation
        });
        globalEmpObj = temp;
        temp.forEach(element => {
            contant += '<tr onclick="editEmployee(this)"><td>' + element.empcode + '</td><td>' + element.name + '</td><td>' + element.age + '</td><td>' + element.gender + '</td><td>' + element.department + '</td><td>' + element.designation + '</td><td>' + element.salary + '</td><td>' + '<button onclick="editEmployee()">Edit</button>' + '</td></tr>';
        });
        document.getElementById('tablecontant').innerHTML = contant;
        temp = ''
    } else {}
}

function editEmployee(element, type) {

   

    document.getElementById('showEmp').style.display = 'none';
    document.getElementById('addEmp').style.display = 'block';
    document.getElementById('fullDump').style.display = "none";
    document.getElementById('partialDump').style.display = "none";
     document.getElementById('isAddDept').style.display = 'none';
    document.getElementById('isEditDept').style.display = 'block';
    document.getElementById('isAddDeg').style.display = 'none';
    document.getElementById('isEditDeg').style.display = 'block';
    document.getElementById('addEmpbtn').style.display = 'none';
    document.getElementById('editEmpbtn').style.display = 'block';
    document.getElementById('emp_code').disabled = true;



    

    var colValue = element.innerHTML.substring(4).split("<")[0];
    
    let x = employee.filter(element => {
        return element.empcode == colValue
    })



    var empCode = document.getElementById('emp_code').value =x[0].empcode;
    console.log(empCode);
    
    var name = document.getElementById('name').value =x[0].name;
    var age = document.getElementById('age').value =x[0].age;
    var sal = document.getElementById('sal').value=x[0].salary;

    if(x[0].gender =="Male") {
        var male = document.getElementById('male')
        male.checked = true;
        selectedGender =male;
    } else {
        var female = document.getElementById('female')
        female.checked = true;
        selectedGender =female;
    }
    
    var department = document.getElementById('department');
    department.value = value=x[0].department;
    selectedDepartment =department;
    var designation = document.getElementById('designation');
    designation.value = value=x[0].designation;
    selectedDsignation = designation;
 

}

function editEmployeeDetail() {
    var empCode = document.getElementById('emp_code').value ;
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var sal = document.getElementById('sal').value;
    var dept;
    var deg;
    var gender;
if(deptChange) {
 
    dept = selectedDepartment;
 
} else{
    dept = selectedDepartment.value;
    
}

if(degChange) {
 
    deg = selectedDsignation;
   
} else{
    deg = selectedDsignation.value;
  
}

if(genderChange) {
 
    gender = selectedGender;
    
} else{
    gender = selectedGender.value;
  
}



let x = employee.filter(element => {
    return element.empcode == empCode
})
x[0].empcode = empCode;
x[0].name = name;
x[0].salary = sal;
x[0].age = age;
x[0].department = dept;
x[0].designation = deg;
x[0].gender = gender;

document.getElementById('tablecontant').innerHTML = "";
contant = '';
employee.forEach(element => {

    contant += '<tr onclick="editEmployee(this)"><td>' + element.empcode + '</td><td>' + element.name + '</td><td>' + element.age + '</td><td>' + element.gender + '</td><td>' + element.department + '</td><td>' + element.designation + '</td><td>' + element.salary + '</td><td>' + '<button  >Edit</button>' + '</td></tr>';
});
globalEmpObj = employee;
document.getElementById('tablecontant').innerHTML = contant;

alert("Employee has been updated successfully")
    document.getElementById('fullDump').style.display = "none";
    document.getElementById('showEmp').style.display = 'block';
    document.getElementById('addEmp').style.display = 'none';
    document.getElementById('partialDump').style.display = "none";

console.log(x);


    

}


function newEmployee() {
    globalEmpObj ='';
    deptChange = false;
    degChange = false;
    genderChange = false;

    document.getElementById('showEmp').style.display = 'none';
    document.getElementById('addEmp').style.display = 'block';
    document.getElementById('fullDump').style.display = "none";
    document.getElementById('partialDump').style.display = "none";
    
    document.getElementById('isAddDept').style.display = 'block';
    document.getElementById('isEditDept').style.display = 'none';
    document.getElementById('isAddDeg').style.display = 'block';
    document.getElementById('isEditDeg').style.display = 'none';
    document.getElementById('addEmpbtn').style.display = 'block';
    document.getElementById('editEmpbtn').style.display = 'none';
    document.getElementById('emp_code').disabled = false;
 
        var male = document.getElementById('male')
        male.checked = false;
 
        var female = document.getElementById('female')
        female.checked = false;
    

    document.getElementById('emp_code').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('sal').value ='';

}

function chkEmployeeCode(code) {

    var cd = employee.find(element => {

        return element.empcode == code;

    });

    return cd;
}

function chkEmployeeFieldvalidation() {
  
    var empCode = document.getElementById('emp_code').value;
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var sal = document.getElementById('sal').value;



    if (empCode || (empCode && name && age && selectedGender && selectedDepartment && selectedDsignation && selectedDsignation && sal)) {

        var item = chkEmployeeCode(empCode)

        if (item) {
            alert("Employee code exist.Please Enter another employee code");
            return true;
        } else if (!name || name == '') {
            alert('Please Enter Name');

        } else if (!name || name == '') {
            alert('Please Enter Name');

        } else if (!age || age == "") {
            alert('Please Enter Age');

        } else if (!selectedGender || selectedGender == "") {

            alert('Please Enter Gender');

        } else if (!selectedDepartment) {
            alert('Please Enter Department');

        } else if (!selectedDsignation) {
            alert('Please Enter Dsignation');

        } else if (!sal || sal == "") {
            alert('Please Enter Salary');

        } else {
            createNewEmp(empCode, name, age, sal, selectedDepartment, selectedDsignation, selectedGender)
        }



    } else {
        alert('Please Enter Employee Code');

    }


}

function createNewEmp(empCode, name, age, sal, selectedDepartment, selectedDsignation, selectedGender) {

    
    var temp;
    document.getElementById('tablecontant').innerHTML = "";
    contant = '';

    var addEmpObj = {};

    addEmpObj = {

        empcode: empCode,
        name: name,
        age: age,
        gender: selectedGender,
        department: selectedDepartment,
        designation: selectedDsignation,
        salary: sal

    }
    employee.push(addEmpObj)
    console.log(employee);
    globalEmpObj = employee;

alert("New Employee has been created")
    document.getElementById('fullDump').style.display = "none";
    document.getElementById('showEmp').style.display = 'block';
    document.getElementById('addEmp').style.display = 'none';
    document.getElementById('partialDump').style.display = "none";

    temp = employee;
    temp.forEach(element => {
        contant += '<tr><td>' + element.empcode + '</td><td>' + element.name + '</td><td>' + element.age + '</td><td>' + element.gender + '</td><td>' + element.department + '</td><td>' + element.designation + '</td><td>' + element.salary + '</td><td>' + '<button onclick="editEmployee()">Edit</button>' + '</td></tr>';
    });
    document.getElementById('tablecontant').innerHTML = contant;
    temp = ''
}




function fullDumpEmployee() {

    if (globalEmpObj && globalEmpObj.length) {
        document.getElementById('fullDump').style.display = "block";
        document.getElementById('showEmp').style.display = 'none';
        document.getElementById('addEmp').style.display = 'none';
        document.getElementById('partialDump').style.display = "none";
        deptChange = false;
        degChange = false;
        genderChange = false;
    
    
        document.getElementById('fullDump').innerHTML = "";
        fullDum = ''
        var temp = globalEmpObj;
        console.log(temp,'kl');
        
        temp.forEach((item) => {
    
            fullDum += '<div><p>' + JSON.stringify(item.empcode + "::" + item.name + "::" + item.age + "::" + item.gender + "::" + item.department + "::" + item.designation + "::" + item.salary) + '</p></div>'
    
        })
        document.getElementById('fullDump').innerHTML = fullDum;
        temp = ''
    } else {
        return;
    }

}

function partialDumpEmployee() {

    if (globalEmpObj && globalEmpObj.length) {
        document.getElementById('fullDump').style.display = "none";
        document.getElementById('showEmp').style.display = 'none';
        document.getElementById('addEmp').style.display = 'none';
        document.getElementById('partialDump').style.display = "block";
        deptChange = false;
        degChange = false;
        genderChange = false;
    
        document.getElementById('partialDump').innerHTML = "";
        partialDum = ''
        var temp = globalEmpObj;
        temp.forEach((item) => {
    
            partialDum += '<div><p>' + JSON.stringify(item.empcode + "::" + item.name + "::" + item.age) + '</p></div>'
    
        })
        document.getElementById('partialDump').innerHTML = partialDum;
        temp = ''
    } else{
        return;
    }
   
}