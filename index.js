function onSubmit() {

    if(document.myForm.fname.value.length < 3 || document.myForm.fname.value.length > 30 )
    {
      alert('Please Fill in First Name Correctly');

      return false;
    }

    if(document.myForm.fname.value.length < 1 || document.myForm.fname.value.length > 30 )
    {
      alert('Please Fill in Last Name Correctly');
      return false;
    }

    var pattern = new RegExp('(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}');

    if(pattern.test(document.myForm.dname.value) == false)
    {
      alert('Please Fill in the Right Domain Name');
      return false;
    }

   // alert('Domain Name:' + document.myForm.dname.value);

   if(document.myForm.bprice.value < 0 || document.myForm.bprice.value == '')
    {
      alert('Please Fill in the Base Price');
      return false;
    }

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!document.myForm.Email.value.match(mailformat))
    {
      alert('Please Enter the Right Email Address');
      return false;
    }

    if(document.getElementById('myCheck').checked == false)
    {
      alert('Kindly Accept the Terms & Conditions to Proceed!');
      return false;
    }
    
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const dname = document.getElementById('dname').value;
    const bprice = document.getElementById('bprice').value;
    const email = document.getElementById('Email').value;


    localStorage.setItem("Fname",fname);
    localStorage.setItem("Lname",lname);
    localStorage.setItem("Dname",dname);
    localStorage.setItem("Bprice",bprice);
    localStorage.setItem("Email",email);

    return true;

}