
let questions = [
    ['Öncelik tanımak, öndelik vermek'],
    ['İstemeyerek bir yere gitme durumunda kalmak, dibe düşmek'],
    ['Gitarın Baş Kısmı'],
    ['Düşman kıyılarına asker indirme işi'],
    ['Yalnızca bir yönde akım geçiren devre'],
    ['Yalnız belirli duraklarda duran tren, otobüs veya gemi'],
    ['Ağlayıp sızlama, bağırıp çağırma'],
    ['Ülkeler veya şehirler arasında yapılan uzun yolculuk, seyahat'],
    ['Yere veya mobilya üstüne serilmek, duvara gerilmek için, genellikle yünden dokunan, kısa ve sık tüylü, nakışlı, kalın yaygı'],
    ['Daha kolay ve yalın duruma getirmek'],
    ['Davranış, düşünce, duygu bakımından ince, nazik olan (kimse)'],
    ['Arası bozuk, iyi olmayan (insan ilişkileri)'],
    ['Özdeyiş, slogan'],
    ['Açık seçik olan, anlaşılmaz yanı bulunmayan'],
    ['Doğal yolla yapılan'],
    ['Örme işi veya biçimi'],
    ['Giysilerde bazı yerlerden içeriye doğru daraltılarak dikilmiş bölüm'],
    ['Kanıtlanmamış bir haber ya da olay, söylenti'],
    ['Dik, çıkması ve geçilmesi güç (yer)'],
    ['Genellikle bazı sporları yaparken giyilen, paçaları dizlerin yukarısında başlayan kısa pantolon'],
    ['Giysi, kılık kıyafet'],
    ['Sivrisineğe benzer çok küçük bir sinek türü'],
    ['Kürek kemiği'],
    ['Aldatıcı şey, tuzak, hile']
]

let answers = [
    ['avans','avans verme','avans vermek','avans tanıma','avans tanımak'],
    ['boylamak'],
    ['cabeza'],
    ['çıkarma', 'çıkarma yapmak', 'çıkarma yapma'],
    ['diyot'],
    ['ekspres'],
    ['feryat', 'figan', 'feryat figan'],
    ['gezi'],
    ['halı'],
    ['indirgemek', 'indirgeme'],
    ['kibar'],
    ['limoni'],
    ['motto'],
    ['net'],
    ['organik'],
    ['örgü'],
    ['pens'],
    ['rivayet'],
    ['sarp'],
    ['şort'],
    ['urba'],
    ['üvez'],
    ['yağrın'],
    ['zoka']
]


let copyAnswers = [...answers]

let copyQuestions = [...questions]




const inputText = document.getElementById("inputText")
const questionText = document.getElementById("question")
const showButton = document.getElementById("showButton")

const timerText = document.getElementById("timer")






const divA = document.getElementById("a")
const divB = document.getElementById("b")
const divC = document.getElementById("c")
const divÇ = document.getElementById("ç")
const divD = document.getElementById("d")
const divE = document.getElementById("e")
const divF = document.getElementById("f")
const divG = document.getElementById("g")
const divH = document.getElementById("h")
const divİ = document.getElementById("i")
const divK = document.getElementById("k")
const divL = document.getElementById("l")
const divM = document.getElementById("m")
const divN = document.getElementById("n")
const divO = document.getElementById("o")
const divÖ = document.getElementById("ö")
const divP = document.getElementById("p")
const divR = document.getElementById("r")
const divS = document.getElementById("s")
const divŞ = document.getElementById("ş")
const divU = document.getElementById("u")
const divÜ = document.getElementById("ü")
const divY = document.getElementById("y")
const divZ = document.getElementById("z")


let letters = [divA,divB,divC,divÇ,divD,divE,divF,divG,divH,divİ,divK,
divL,divM,divN,divO,divÖ,divP,divR,divS,divŞ,divU,divÜ,divY,divZ]



const allElements = document.querySelectorAll('.allElements');


let currentQuestionIndex = 0
let trueAnswer = 0
let falseAnswer = 0
let passAnswer = 0
let gameOver = false
let passBool = false
let colorCounter = 0

let userAnswers = []


let counterLastQuetions = 0

let questionIndex = 0

let indexArray = []




function getQuestion(){
    if(questions.length != 0){
        let currentQuestion = questions[currentQuestionIndex][0]
        questionText.innerText = currentQuestion
    }
 
}

function getAnswers(){
    let currentAnswer = answers[currentQuestionIndex]
    return currentAnswer
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(intervalId);
            inputText.style.display = 'none'
            gameOver = true
            questionText.innerText = "Oyun Bitti"
            showButton.style.display = ""
        }
        if(gameOver){
            clearInterval(intervalId)
        }
    }, 1000);
}

let fiveMinutes = 60 * 5,
    display = document.getElementById('timer')
startTimer(fiveMinutes, display);








inputText.addEventListener("keypress", function(event) {
    if (event.key === "Enter" && !inputText.value == "" && !(counterLastQuetions == 23 && inputText.value == "pas")) {
        event.preventDefault();

       

        if(inputText.value == "bitir"){
            gameOver = true
            inputText.style.display = "none"
        
        }

       
        if((trueAnswer+falseAnswer) <= 24){
            letters[currentQuestionIndex].style.border = "2px solid #fbe3e8"
        }
   

       

        if((trueAnswer+falseAnswer) == 23){
            console.log('oyun bitti')
            passAnswer = 0
            gameOver = true
            answerInput = inputText.value
            let answerInputUpper = answerInput.toLowerCase()
            checkAnswer(answerInputUpper)
            
            inputText.style.display = "none"
        }
        if(gameOver){
            questionText.textContent = 'Oyun Bitti'
            showButton.style.display = ""
            console.log(userAnswers)
            
        }
        else{
            if(currentQuestionIndex == questions.length-1){
                answerInput = inputText.value
                let answerInputUpper = answerInput.toLowerCase()
                
              

            
                checkAnswer(answerInputUpper)
               
                currentQuestionIndex = 0
      
    
                getQuestion()   
                console.log("current index "+currentQuestionIndex)  
                
                
            }
            else {
                answerInput = inputText.value
                let answerInputUpper = answerInput.toLowerCase()
                checkAnswer(answerInputUpper)
               
                if(passBool){
                  currentQuestionIndex++       
                }
                getQuestion()
                
                console.log("current index "+currentQuestionIndex)
            }
            console.log(questions.length)
    
            colorCounter++
    
            inputText.value = ""
            
            if((trueAnswer+falseAnswer) <= 24){
                letters[currentQuestionIndex].style.border = "2px solid #8458B3"
            }

            
        }


       

       
    }
  });

 

function checkAnswer(answerInput){

   
    if(answers[currentQuestionIndex].includes(answerInput)){
        trueAnswer++
        console.log(currentQuestionIndex)
        //letters[colorCounter].style.backgroundColor = "green" 
        letters[currentQuestionIndex].style.backgroundColor = "#1dbab4"
        letters.splice(currentQuestionIndex,1)
        console.log("true")
        questions.splice(currentQuestionIndex,1)  
        answers.splice(currentQuestionIndex,1)  
        console.log(questions)
        passBool = false   
        counterLastQuetions++
       
        
    }
    else if(answerInput == "pas" && letters.length >1){
        passAnswer++
        console.log(currentQuestionIndex)
        //letters[colorCounter].style.backgroundColor = "yellow"
        letters[currentQuestionIndex].style.backgroundColor = "yellow"
        console.log("pas") 
        passBool = true  
       
        
    }
    else{
        falseAnswer++
        console.log(currentQuestionIndex)
        //letters[colorCounter].style.backgroundColor = "red"
        letters[currentQuestionIndex].style.backgroundColor = "#ff3a22"
        letters.splice(currentQuestionIndex,1)
        console.log("false")
        questions.splice(currentQuestionIndex,1) 
        answers.splice(currentQuestionIndex,1) 
        console.log(questions)
        passBool = false  
        counterLastQuetions++   
        
                
    }

   
    console.log("letters"+letters.length)

    let question = questionText.innerText.trim();
    let questionIndex = copyQuestions.findIndex((q) => q[0] === question)
    pushAnswerAndIndex(answerInput,questionIndex)
}

function gameStart(){
    
    getQuestion()   
    console.log("current index "+currentQuestionIndex)
    letters[currentQuestionIndex].style.border = "2px solid #8458B3"
    showButton.style.display = "none"
    console.log(questionText.innerText)
    console.log(copyQuestions)
   

}




gameStart()


function clearPage(){
    allElements.forEach(element =>{
        element.remove()
    })
}

function showSimpleDetails(){
    let divTrue = document.createElement("div")
    divTrue.classList.add("result")
    divTrue.style.width = "200px"
    divTrue.style.height = "50px"
    divTrue.style.background = "#009879"
    divTrue.style.color = "black"
    divTrue.style.fontWeight = "bold"
    divTrue.innerText = "Doğru Sayısı: " + trueAnswer
    document.body.appendChild(divTrue)
    let divFalse = document.createElement("div")
    divFalse.classList.add("result")
    divFalse.style.width = "200px"
    divFalse.style.height = "50px"
    divFalse.style.background = "red"
    divFalse.style.color = "black"
    divFalse.style.fontWeight = "bold"
    divFalse.innerText = "Yanlış Sayısı: " + falseAnswer
    document.body.appendChild(divFalse)
    let divPass = document.createElement("div")
    divPass.classList.add("result")
    divPass.style.width = "200px"
    divPass.style.height = "50px"
    divPass.style.background = "yellow"
    divPass.style.color = "black"
    divPass.style.fontWeight = "bold"
    divPass.innerText = "Boş Sayısı: " + [(24)-(trueAnswer+falseAnswer)]
    document.body.appendChild(divPass)

    let divtimer = document.createElement("div")
    divtimer.classList.add("result")
    divtimer.style.width = "200px"
    divtimer.style.height = "50px"
    divtimer.style.background = "orange"
    divtimer.style.color = "black"
    divtimer.style.fontWeight = "bold"
    divtimer.innerText = "Kalan Süre: " + timerText.textContent
    document.body.appendChild(divtimer)
}




function showOtherDetails(){
      // table elementini oluştur
    var table = document.createElement("table");
    table.classList.add("styled-table")

// thead elementini oluştur ve table'a ekle
    var thead = document.createElement("thead");
    table.appendChild(thead);

    // başlık satırını oluştur
    var headerRow = document.createElement("tr");
    var header1 = document.createElement("th");
    var header2 = document.createElement("th");
    let header3 = document.createElement("th")
    header1.textContent = "Cevapların";
    header2.textContent = "Doğru Cevaplar";
    header3.textContent = "Sorular"
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    headerRow.appendChild(header3);
    thead.appendChild(headerRow);

    // tbody elementini oluştur ve table'a ekle
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);

  

      
        
          
    
    // veri satırlarını oluştur
    for(let i = 0; i < copyAnswers.length; i++){
        let row1 = document.createElement("tr");
        let cell1 = document.createElement("td")
        let cell2 = document.createElement("td");
        let cell3 = document.createElement("td");
     
        cell1.textContent = userAnswers[i]
        cell2.textContent = copyAnswers[i]
        cell3.textContent = copyQuestions[i]
        
        
        if(cell1.innerHTML == ""){
            cell1.textContent = "pas"
        }

        if(copyAnswers[i].includes(cell1.innerHTML)){
            row1.style.backgroundColor = "#009879"
        }
        else if(cell1.innerHTML == "pas"){
            row1.style.backgroundColor = "yellow"
        }
        else{
            row1.style.backgroundColor = "red"
        }

        
        row1.appendChild(cell1)
        row1.appendChild(cell2);
        row1.appendChild(cell3);
        tbody.appendChild(row1);
    }



    // table elementini div elementine ekle
    var tableDiv = document.getElementById("myTable");
    tableDiv.appendChild(table);
    


}





function restartGame(){
    window.location.reload()
}



function addRestartGameButton(){
    let button = document.createElement("button")
    button.classList.add("button-1")
    button.innerText = "Tekrar Oyna"
    button.addEventListener("click",function(){
        restartGame()
    })
    document.body.appendChild(button)
}

function showDetails(){
   clearPage()
   showSimpleDetails()
   showOtherDetails()
   addRestartGameButton()
   
}


function readyGame(){
    window.location.assign("index.html")
}


function pushAnswerAndIndex(userAnswer,index){
    userAnswers[index] = userAnswer
}























