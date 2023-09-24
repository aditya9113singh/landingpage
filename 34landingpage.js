
let flag=1;
let flag2=1;
let flag3=1;
let flag4=1;
let flag5=1;
let flag6=1;
let b1=document.querySelectorAll(".l1");
for(b of b1){
    let a=document.createElement("p");
b.addEventListener("click",()=>{
    if(flag==1){


a.innerText="Bingernet is a  streaming service that lets you enjoy a variety of award-winning TV shows, movies, anime, and documentaries on thousands of Internet-connected devices.";

b.insertAdjacentElement('afterend',a);
flag=0;
    }
    else{
        a.remove();
        flag=1;
    }
});
break;
}


let c1=document.querySelectorAll(".l2");
for(c of c1){
    let a2=document.createElement("p");
c.addEventListener("click",()=>{
    if(flag2==1){


a2.innerText="Watch Bingernet on your smartphone, tablet, smart TV, laptop, or streaming device for a fixed monthly fee. Plans ranging from ₹149 to ₹649 per month. No extra costs or contracts.";

c.insertAdjacentElement('afterend',a2);
flag2=0;
    }
    else{
        a2.remove();
        flag2=1;
    }
});
break;
}


let d2=document.querySelectorAll(".l3");
for(d of d2){
    let a3=document.createElement("p");
d.addEventListener("click",()=>{
    if(flag3==1){


a3.innerText="You will find all types of content here from romatic movies to thriller shows to terrifying documentries ad much more.";

d.insertAdjacentElement('afterend',a3);
flag3=0;
    }
    else{
        a3.remove();
        flag3=1;
    }
});
break;
}


let e2=document.querySelectorAll(".l4");
for(e of e2){
    let a4=document.createElement("p");
e.addEventListener("click",()=>{
    if(flag4==1){


a4.innerText="Bingernet is ​​flexible. There are no pesky contracts and no strings attached. You can easily cancel your account online in two clicks. There are no cancellation fees – open or close your account anytime.";

e.insertAdjacentElement('afterend',a4);
flag4=0;
    }
    else{
        a4.remove();
        flag4=1;
    }
});
break;
}


let f2=document.querySelectorAll(".l5");
for(f of f2){
    let a5=document.createElement("p");
f.addEventListener("click",()=>{
    if(flag5==1){


a5.innerText="Your membership includes the Bingernet Kids Experience. Kids enjoy family TV shows and movies in their own ways, but you can control the content they watchKids profiles have PIN-protected parental controls that let you prevent kids from seeing mature content and block titles you dont want them to see.";

f.insertAdjacentElement('afterend',a5);
flag5=0;
    }
    else{
        a5.remove();
        flag5=1;
    }
});
break;
}


let g2=document.querySelectorAll(".l6");
for(g of g2){
    let a6=document.createElement("p");
g.addEventListener("click",()=>{
    if(flag6==1){


a6.innerText="Watch anywhere, anytime To watch instantly from your personal computer or on any Internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles, access your Netflix app at netflix.com on the web. Sign in to account.You can also download your favorite shows from the iOS, Android or Windows 10 apps. Use downloads to watch on the go and without an internet connection. Take Netflix with you wherever you go.";

g.insertAdjacentElement('afterend',a6);
flag6=0;
    }
    else{
        a6.remove();
        flag6=1;
    }
});
break;
}