document.addEventListener("DOMContentLoaded", (event) => {
    

    const form = document.querySelector('#empForm');

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        let id = document.querySelector('#id').value;
        let name = document.querySelector('#name').value;
        let ext = document.querySelector('#ext').value;
        let email = document.querySelector('#email').value;
        let department = document.querySelector('#department').value;

        console.log(`ID: ${ id }`);
        console.log(`Name: ${ name }`);
        console.log(`Extension: ${ ext }`);
        console.log(`Email: ${ email }`);
        console.log(`Department: ${ department }`);

    });



});