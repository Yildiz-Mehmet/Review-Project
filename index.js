const people = [
  {
    img: "./images/1.jpg",
    id: 1,
    name: "Mark Smith",
    job: "Doctor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cumque, vitae esse quis quos repellendus dolor labore veritatis, corporis voluptatum similique debitis officia autem expedita hic explicabo saepe nemo laudantium!",
  },
  {
    img: "./images/2.jpg",
    name: "Taylor Jones",
    job: "Journalist",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptas deleniti eum velit quia vero vitae qui sapiente expedita totam, ipsa esse labore explicabo quo quidem dicta nesciunt officia aliquid?",
  },
  {
    img: "./images/3.jpg",
    name: "Arden Williams",
    job: "Teacher",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo temporibus consequatur minus odio vero quos excepturi quibusdam reprehenderit, nam fugiat, voluptatem reiciendis rem natus quasi consequuntur, eos commodi quod illo.",
  },
  {
    img: "./images/4.jpg",
    name: "Clover Brown",
    job: "Soldier",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sint alias possimus debitis corrupti aliquid veritatis doloribus minima iste molestiae et sunt neque quam magnam itaque, fugit ipsa iure obcaecati.",
  },
  {
    img: "./images/5.jpg",
    name: "Hailey Evans",
    job: "Nurse",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi sint aut odit nesciunt ratione animi voluptatem pariatur aspernatur, explicabo ullam fugit alias saepe iste ut rerum assumenda repudiandae possimus tempore.",
  },
  {
    img: "./images/6.jpg",
    name: "Henry Thomas",
    job: "Actor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cumque, vitae esse quis quos repellendus dolor labore veritatis, corporis voluptatum similique debitis officia autem expedita hic explicabo saepe nemo laudantium!",
  },
];
const img = document.getElementById("img");
const name = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");
const big_btn = document.querySelector(".big_btn");
const line = document.querySelector(".line");
let count = 0;

let colors = [
  "Salmon",
  "lightBlue",
  "Orange",
  "FireBrick",
  "DarkRed",
  "Yellow",
];

window.addEventListener("load", () => {
  person(count);
});

function person(count) {
  img.src = people[count].img;
  name.innerHTML = people[count].name;
  job.innerHTML = people[count].job;
  text.innerHTML = people[count].text;
}
big_btn.addEventListener("click", (e) => {
  let random = Math.floor(Math.random() * people.length);
  console.log(e);
  if (e.target.classList[1] == "fa-chevron-right") {
    count++;
    if (count >= people.length) {
      count = 0;
    }
    line.style.backgroundColor = colors[random];

    person(count);
  } else if (e.target.classList[1] == "fa-chevron-left") {
    count--;
    if (count < 0) {
      count = people.length - 1;
    }
    line.style.backgroundColor = colors[random];

    person(count);
  } else if (e.target.classList[0] == "random-btn") {
    line.style.backgroundColor = colors[random];

    person(random);
  }
});
