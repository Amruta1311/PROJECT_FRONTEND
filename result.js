window.addEventListener('load',() => {

       const fname = localStorage.getItem("Fname");
       const lname = localStorage.getItem("Lname");
       const dname = localStorage.getItem("Dname");
       const bprice = localStorage.getItem("Bprice");
       const email = localStorage.getItem("Email");

       document.getElementById('data').innerHTML = fname;
       document.getElementById('data1').innerHTML = lname;
       document.getElementById('data2').innerHTML = dname;
       document.getElementById('data3').innerHTML = bprice;
       document.getElementById('data4').innerHTML = email;
})