let image = document.querySelector(".image")
let span1 = document.querySelector(".span1")
let span2 = document.querySelector(".span2")
let names = document.querySelector(".names")
let role = document.querySelector(".role")
let company_img = document.querySelector(".company_img")
let left_arrow = document.querySelector(".left_arrow")
let right_arrow = document.querySelector(".right_arrow")
let division = document.querySelector(".division")
// console.log(names)
var test = [
    {
        image: "images/subham.png",
        span1: "Acquire Customers From New",
        span2: "Customer Segments",
        names: "Subham Kumar",
        role: "Product Manager",
        company_img: "images/unacademy.1c618f03.svg",
        class: "one",
    },
    {
        image: "images/saurav.png",
        span1: "Improved The Bottom Line With",
        span2: "Cash-Like Collection",
        names: "Saurav Goyal",
        role: "Chief Finance Officer",
        company_img: "images/moneyview.cc7bb2cc.png",
        class: "two"
    },
    {
        image: "images/ashish.png",
        span1: "Readymade Closed Wallet Solution",
        span2: "For Quick Refunds",
        names: "Ashish Somani",
        role: "GM, Strategy and Planning",
        company_img: "images/medlife.b4057da3.png",
        class: "three"
    },
    {
        image: "images/pranay.png",
        span1: "Single Flow To Collect And ",
        span2: "Disburse Payments",
        names: "Pranay Bhardwaj",
        role: "Product Manager",
        company_img: "images/slice.3cf8125b.png",
        class: "four"
    },
    {
        image: "images/shailesh.png",
        span1: "Simplified Reconciliation Process",
        span2: " ForFinOps Teams",
        names: "Shailesh Gupta",
        role: "Founder",
        company_img: "images/innov8.66ced7e1.svg",
        class: 'five'
    },
    {
        image: "images/girish.png",
        span1: "Finance Your Working Capital To",
        span2: "Continue Growing",
        names: "Girish Khemnani",
        role: "Owner",
        company_img: "images/marketing.b788f40a.png",
        class: 'six'
    },
    {
        image: "images/aravind.png",
        span1: "Helped Us Reduce Outstandings",
        span2: "By 18%",
        names: "Aravind Radhakrishnan",
        role: "Product Director",
        company_img: "images/zoomcar.57998cda.svg",
        class: 'seven',
    }
]
// console.log(division.value) 
function setZ(k) {
    // console.log(test)
    image.src = test[k].image;
    span1.textContent = test[k].span1;
    span2.textContent = test[k].span2;
    names.textContent = test[k].names;
    role.textContent = test[k].role;
    company_img.src = test[k].company_img;
}
setZ(0)
var i = 0
const intervals = setInterval(() => {
    i += 1
    change(i)
}, 3000)
function change(i) {

    if (i > test.length - 1) {
        setZ(0)
    }
    else {
        image.src = test[i].image;
        span1.textContent = test[i].span1;
        span2.textContent = test[i].span2;
        names.textContent = test[i].names;
        role.textContent = test[i].role;
        company_img.src = test[i].company_img;
    }
}

right_arrow.addEventListener('click', () => {
    console.log("right", i)
    clearInterval(intervals)
    i += 1
    if (i > test.length - 1) {
        i = 0;
    }
    change(i);
})
left_arrow.addEventListener('click', () => {
    console.log("left", i)
    clearInterval(intervals)
    i -= 1
    if (i < 0) {
        i = test.length - 1;
    }
    change(i);
})


//responsive menu

let Rmenu=document.querySelector(".Rmenu")
let ResOp=document.querySelector(".ResOp")
let Close=document.querySelector(".Close")
Rmenu.addEventListener('click',()=>{
    ResOp.classList.add('active')
    Rmenu.classList.add('RotateMenu') 
    Close.classList.add('RotateMenu') 
    Close.addEventListener('click',()=>{
         Rmenu.classList.add('RotateMenu1') 
         Close.classList.add('RotateMenu')
         ResOp.classList.remove('active')
    })
    Close.classList.remove('RotateMenu')
    Rmenu.classList.remove('RotateMenu1') 
    Rmenu.classList.add('RotateMenu') 
    Rmenu.classList.remove('active') 





   
       

})