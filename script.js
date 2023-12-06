var questions = [{
    text: "Kam naudingos morkos?",
    choices: ["Niekam", "Hitleriui", "Kepenims", "Odai"],
    answer: "Odai"
 },
 {
    text: "Kam naudingi obuoliai?",
    choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
    answer: "Virškinimui"
 },
 {
    text: "Kokias ligas padeda gydyti agrastai?",
    choices: ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
    answer: "Cukrini diabetą"
 },
 {
    text: "Kokio vitamino gausu apelsinuose?",
    choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
    answer: "Vitamino C"
 },
 {
    text: "Kokiais dalykais yra turtingi arbūzai?",
    choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
    answer: "Visi teisingi"
 }
]

class question {
    constructor(text, choices, answer) {
        this.text = text
        this.choices = choices
        this.answer = answer
    }

    start(){
        start.style.display = "none"

        const h1 = document.createElement("h1")
        const paragraph1 = document.createElement("p")
        const btn1 = document.createElement("button")
        const btn2 = document.createElement("button")
        const btn3 = document.createElement("button")
        const btn4 = document.createElement("button")
        const hr = document.createElement("hr")
        const paragraph2 = document.createElement("p")
    
        h1.innerHTML = "Vaisiai"
        paragraph1.innerHTML = question1.text
        btn1.innerHTML = question1.choices[0]
        btn2.innerHTML = question1.choices[1]
        btn3.innerHTML = question1.choices[2]
        btn4.innerHTML = question1.choices[3]
        paragraph2.innerHTML = "Klausimas " + "0" + " Iš " + "0"

        document.body.append(h1)
        document.body.append(paragraph1)
        document.body.append(btn1)
        document.body.append(btn2)
        document.body.append(btn3)
        document.body.append(btn4)
        document.body.append(hr)
        document.body.append(paragraph2)
    }



}

const question1 = new question(
    questions[0].text, questions[0].choices, questions[0].answer
)
const question2 = new question(
    questions[1].text, questions[1].choices, questions[1].answer
)
const question3 = new question(
    questions[2].text, questions[2].choices, questions[2].answer
)
const question4 = new question(
    questions[3].text, questions[3].choices, questions[3].answer
)
const question5 = new question(
    questions[4].text, questions[4].choices, questions[4].answer
)


const start = document.getElementById("start")

start.addEventListener("click", function(){
    question1.start()
})

btn1.addEventListener("click", function(){
    h1.innerHTML = "Vaisiai"
    paragraph1.innerHTML = question2.text
    btn1.innerHTML = question2.choices[0]
    btn2.innerHTML = question2.choices[1]
    btn3.innerHTML = question2.choices[2]
    btn4.innerHTML = question2.choices[3]
    paragraph2.innerHTML = "Klausimas " + "0" + " Iš " + "0"
})


    
   




