const bttt = document.getElementById("btn");
const joking = document.getElementById("joke");
const next = function (){ 
   let aa = [" My wife told me to stop impersonating a flamingo. I had to put my foot down."," I went to buy some camo pants but couldn’t find any."," I failed math so many times at school, I can’t even count.","I used to have a handle on life, but then it broke.", "I was wondering why the frisbee kept getting bigger and bigger, but then it hit me."," I heard there were a bunch of break-ins over at the car park. That is wrong on so many levels.", "I want to die peacefully in my sleep, like my grandfather… Not screaming and yelling like the passengers in his car." ]
   for(let i=0;i<aa.length;i++){
    let value = aa[Math.floor(Math.random()*16)];
        return value;
   }
   
};
function changeJoke(){
   joking.innerText=next();
}

bttt.addEventListener("click",changeJoke);
