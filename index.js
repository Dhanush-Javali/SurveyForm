const form = document.querySelector(".detailsform");
const errorName = document.getElementById('error');
const btnreset = document.querySelector('.btnreset');

    
form.addEventListener('submit', function(e){
    e.preventDefault();
    const formdata = new FormData(form);
    const fname = formdata.get('fname');
    const lname = formdata.get('lname');
    const dob = formdata.get('DOB');
    const country = formdata.get('country');
    const gender = formdata.get('gender');
    const profession = formdata.get('profession');
    const email = formdata.get('email');

   

    const pno = formdata.get('Pno');
    if(pno.length!=10){
        errorName.innerText = "Number should be 10 digits only"
        return false;     
    }  errorName.innerText = "";

    let bool= confirm(`    Please confirm that all the below details are correct..!

    Name : ${fname} ${lname} 
    Date of Birth : ${dob}   
    Country : ${country}     
    Gender : ${gender}
    profession : ${profession}   
    Email : ${email}         
    Mobile number : ${pno}`)

    if(bool==true)
    {
        alert("Your application submitted")
        form.reset(); 
    }
    
    
},false)



btnreset.addEventListener('click',function(e){
    errorName.innerText = "";
})



     

