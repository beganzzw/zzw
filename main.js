let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/your_name_female.jpg'){
        myImage.setAttribute('src','images/ycy1.jpg');
    } else if  (mySrc === 'images/ycy1.jpg'){
        myImage.setAttribute('src','images/ycy2.jpg');
    }else if  (mySrc === 'images/ycy2.jpg'){
        myImage.setAttribute('src','images/ycy3.jpg');
    }else if  (mySrc === 'images/ycy3.jpg'){
        myImage.setAttribute('src','images/ycy4.jpg');
    }else {
        myImage.setAttribute('src','images/your_name_female.jpg');
    }
}

function setHeading(name){
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了,'+name+'!';
}

function setUserName(){
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name',myName);
}

let storeName = localStorage.getItem('name');
if (!storeName){
    setUserName();
} else{
    setHeading(storeName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;