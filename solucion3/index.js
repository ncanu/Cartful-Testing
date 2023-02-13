import { appendFileSync } from "fs";

const saveAsCSV =(questions, answers) => {

    let newArr = [];

    const max = Math.max(...questions.map(o => o.answers.length))

    questions.forEach( item => {
        const tempArray = [item.questionName];
        for(let i=0; i< max; i++){
            if(item.answers[i]){
                tempArray.push(item.answers[i].answerName)
            } else{
                tempArray.push(null)
            }
        }
        newArr.push(tempArray)
    })

    const output = newArr[0].map((_, colIndex) => newArr.map(row => row[colIndex]));

    console.log(max)
    console.log(newArr)
    console.log(output)

    output.forEach( item => {
        const csv = `${item.toString()}\n`;
        try {
            appendFileSync("./answers.csv", csv);
        } catch (err) {
            console.error(err);
        }
    })
}

const startApp = () => {

    const questions = [
        {
            questionId: 1,
            questionName: 'What is you favorite color?',
            answers: [
                {
                    answerName: 'Red',
                    answerId: 11
                },
                {
                    answerName: 'Blue',
                    answerId: 12
                },
                {
                    answerName: 'Pink',
                    answerId: 13
                }
            ]
        },
        {
            questionId: 2,
            questionName: 'Are you a flat-earther?',
            answers: [
                {
                    answerName: 'Yes',
                    answerId: 21
                },
                {
                    answerName: 'No',
                    answerId: 22
                }
            ]
        }
    ]

    saveAsCSV(questions)
}

startApp();
