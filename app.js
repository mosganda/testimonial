const customer_image = document.querySelector('#customer-img');
const customer_name = document.querySelector('#customer-name');
const customer_Text = document.querySelector('#customer-text');
const buttons = document.querySelectorAll('.btn');
const Testimonials = [
    {
        testimonial: "Thank you so much for a job well done. Keep it up guys..",
        authur: "John",
        image: "./images/emoji1.jpg"
    },
    {
        testimonial:"You guys are the best! I love your work. Keep up the great work!",
        authur: "Mark",
        image:"./images/emoji2.jpg"
    },
    {
        testimonial: "I just wanted to let you know that it’s been great working with you.",
        authur: "Steve",
        image: "./images/emoji3.jpg"
    },
    {
        testimonial: "You’ve been so helpful. Is there anything I can do for you?",
        authur: "Kyle",
        image: "./images/emoji4.jpg"

    },
    {
        testimonial: "May God bless you for this project that has changed my life",
        authur: "maria",
        image: "./images/emoji5.jpg"
    }
];
let counter = 0;
buttons.forEach(element=>{
element.addEventListener('click', function(){
    if(element.classList.contains('btnPrev')){
        counter--;
        if(counter < 0){
            counter = Testimonials.length -1;
        }
        customer_image.src = Testimonials[counter].image;
        customer_name.textContent = Testimonials[counter].authur;
        customer_Text.textContent = Testimonials[counter].testimonial;
    }
    if(element.classList.contains('btnNext')){
        counter++;
        if(counter >Testimonials.length-1){
            counter = 0;
        }
        customer_image.src = Testimonials[counter].image;
        customer_name.textContent = Testimonials[counter].authur;
        customer_Text.textContent = Testimonials[counter].testimonial;
    }
})
})