function greeting(){
    const listOfImgs=["https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2023/corgi-walking-on-leash.jpg?h=370&w=660&la=en&hash=75F9113C9EAD114133F5B6BB93934581","https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=45&dpr=2&s=none","https://ideas.ted.com/wp-content/uploads/sites/3/2020/05/final_animals-homeschooling_credit-alamy.jpg?resize=1536,922","https://img.freepik.com/free-vector/green-snake-crawling-white_1308-36175.jpg?w=1800&t=st=1687127763~exp=1687128363~hmac=254ef6dbfd25708de7b73fc6e0c45917cf0b79428df46219012b167418ec1fe7","https://www.science.org/do/10.1126/science.aba2340/full/dogs_1280p_0.jpg"];
    document.getElementById("greet").innerHTML="Hi How are you"+listOfImgs.length;
    document.getElementById("greet").style.color = "red";
    //console.log("Hi How are you");
}
let i=0;
const listOfNames=["Lady with dog", "Cat","Elephant","Snake", "Dog and Puppy","I am not sure where is it from"]
const listOfImgs=["https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2023/corgi-walking-on-leash.jpg?h=370&w=660&la=en&hash=75F9113C9EAD114133F5B6BB93934581","https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=45&dpr=2&s=none","https://ideas.ted.com/wp-content/uploads/sites/3/2020/05/final_animals-homeschooling_credit-alamy.jpg?resize=1536,922","https://img.freepik.com/free-vector/green-snake-crawling-white_1308-36175.jpg?w=1800&t=st=1687127763~exp=1687128363~hmac=254ef6dbfd25708de7b73fc6e0c45917cf0b79428df46219012b167418ec1fe7","https://www.science.org/do/10.1126/science.aba2340/full/dogs_1280p_0.jpg"];

function showCat(){
    //fix the order of names
    //const listOfNames=["Lady with dog", "Cat","Elephant","Snake", "Tiger", "Dog and Puppy","I am not sure where is it from"]
    document.getElementById('ImgNm').innerHTML=listOfNames[i];
    const showCat1=document.getElementById("catImage");
    //showCat1.src = "https://upload.wikimedia.org/wikipedia/commons/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg";
    //const listOfImgs=["https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2023/corgi-walking-on-leash.jpg?h=370&w=660&la=en&hash=75F9113C9EAD114133F5B6BB93934581", "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=45&dpr=2&s=none", "https://ideas.ted.com/wp-content/uploads/sites/3/2020/05/final_animals-homeschooling_credit-alamy.jpg?resize=1536,922", "https://img.freepik.com/free-vector/green-snake-crawling-white_1308-36175.jpg?w=1800&t=st=1687127763~exp=1687128363~hmac=254ef6dbfd25708de7b73fc6e0c45917cf0b79428df46219012b167418ec1fe7", "https://upload.wikimedia.org/wikipedia/commons/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg","https://www.science.org/do/10.1126/science.aba2340/full/dogs_1280p_0.jpg"];
        showCat1.src =listOfImgs[i];
        i++;
        if(i>listOfImgs.length-1){
            i=0;
        }
}
function showCat1(){
    const showCat1=document.getElementById("catImage");
    //showCat1.src = "https://upload.wikimedia.org/wikipedia/commons/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg";
        document.getElementById('ImgNm').innerHTML=i-1+listOfNames[i-1];
            showCat1.src =listOfImgs[i-1];
        i--;
        if(i<1){
            i=listOfImgs.length;
        }
    // const navigation2=document.getElementById("navigation1");
    // navigation2.addEventListener("click",()=>{
    //     showCat1.hidden=!showCat1.hidden;});
}