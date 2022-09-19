//1.1 Parašyti komandą kuri gražins automobilius, kurie turi parametrą "Miles_per_Gallon" ;

cars.filter((miles)=>{
    return miles.Miles_per_Gallon;
});

//1.2. Parašyti komandą kuri gražins automobilius, kurie neturi "Miles_per_Gallon" ;

cars.filter((noValue)=>{
    return noValue.Miles_per_Gallon === null;
});

//1.3  Parašyti komandą kuri gražins automobilius, kurie turi parametrą 8 "Cylinders" ir "Miles_per_Gallon" parametras didesnis arba lygus 15.

cars.filter((CylindersAndMiles)=>{
    return CylindersAndMiles.Cylinders === 8 && CylindersAndMiles.Miles_per_Gallon >= 15;
});

//1.4  Parašyti komandą kuri gražins automobilius su pridėtu papildomu laiku ojekte, kuris vadinasi "Kilowatts", kuris yra lygus "Horsepower" * 0.7457;

cars.map((kilowatts)=>{
    return{
        ...kilowatts,
        Kilowatts: kilowatts.Horsepower * 0.7457
    }});

   //1.5  Parašyti komandą kuri gražins automobilius išrikiuotus pagal "Weight_in_lbs" didėjančia tvarka.

   cars.sort((a,b)=>{
    return a.Weight_in_lbs - b.Weight_in_lbs
});

//1.6 Parašyti komandą kuri gražins true arba false reikšmę tikrinant ar visi automobiliai yra pagaminti "USA".

cars.every((usa)=>{
    return usa.Origin === "USA";
});