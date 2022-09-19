//2.3 Po 3sek. div fono spalva turi pasikisti į raudona

const changeColor = () => {
    const box = document.getElementById("box");
    setTimeout(() => {
      box.style.backgroundColor = "red";
    }, 3000);
    }
  
  changeColor()