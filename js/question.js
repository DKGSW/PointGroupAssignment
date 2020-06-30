const QN = 9 //quantity of questions

var BaseQuestions = [{
        question: 'Tetrachloromethane',
        img: 'Tetrachloromethane',
        answer: 'T',
        subscript: 'd',
        elements: ['E', '8C', '3C', '6S', '6σ'],
        elements_subscript: ['', '3', '2', '4', 'd']
    },
    {
        question: 'Methane',
        img: 'methane',
        answer: 'T',
        subscript: 'd',
        elements: ['E', '8C', '3C', '6S', '6σ'],
        elements_subscript: ['', '3', '2', '4', 'd']
    },
    {
        question: 'Sulfur hexafluoride',
        img: 'Sulfur hexafluoride',
        answer: 'O',
        subscript: 'h',
        elements: ['E', '8C', '6C', '6C', 'i', '6S', '8S', '3σ', '6σ'],
        elements_subscript: ['', '3', '2', '4', '', '4', '6', 'h', 'd']
    },
    {
        question: '1,2-dichloro-1,2-difluoroethane',
        img: '1,2-dichloro-1,2-difluoroethane',
        answer: 'C',
        subscript: 'i',
        elements: ['E', 'i'],
        elements_subscript: ['', '']
    },
    {
        question: '2,3-dibromobutane',
        img: '2,3-dibromobutane',
        answer: 'C',
        subscript: 'i',
        elements: ['E', 'i'],
        elements_subscript: ['', '']
    },
    {
        question: 'Cis-1,2-dimethylcyclo-propane',
        img: 'cis-1,2-Dimethylcyclo-propane',
        answer: 'C',
        subscript: 's',
        elements: ['E', 'σ'],
        elements_subscript: ['', 'h']
    },
    {
        question: '2-chlorobutane',
        img: '2-Chlorobutane',
        answer: 'C',
        subscript: '1',
        elements: ['E'],
        elements_subscript: ['']
    },
    {
        question: 'Hydrogen peroxide',
        img: 'hydrogen peroxide',
        answer: 'C',
        subscript: '2',
        elements: ['E', 'C'],
        elements_subscript: ['', '2']
    },
    {
        question: '1,3-dichloro-1,2-propadiene',
        img: '1,3-dichloro-1,2-propadiene',
        answer: 'C',
        subscript: '2',
        elements: ['E', 'C'],
        elements_subscript: ['', '2']
    },
    {
        question: 'Trans-1,2-dimethylcyclo-propane',
        img: 'trans-1,2-Dimethylcyclo-propane',
        answer: 'C',
        subscript: '2',
        elements: ['E', 'C'],
        elements_subscript: ['', '2']
    },
    {
        question: 'Triphenylphosphine',
        img: 'Triphenylphosphine',
        answer: 'C',
        subscript: '3',
        elements: ['E', 'C'],
        elements_subscript: ['', '3']
    },
    {
        question: 'Formonitrile',
        img: 'formonitrile',
        answer: 'C',
        subscript: '∞v',
        elements: ['E', 'C', '∞σ'],
        elements_subscript: ['', '∞', 'v']
    },
    {
        question: 'Dichloromethane',
        img: 'Dichloromethane',
        answer: 'C',
        subscript: '2v',
        elements: ['E', 'C', 'σ', 'σ'],
        elements_subscript: ['', '2', 'v', 'h']
    },
    {
        question: 'Trichloromethane',
        img: 'Trichloromethane',
        answer: 'C',
        subscript: '3v',
        elements: ['E', 'C', '3σ'],
        elements_subscript: ['', '3', 'v']
    },
    {
        question: 'Chloromethane',
        img: 'Chloromethane',
        answer: 'C',
        subscript: '3v',
        elements: ['E', 'C', '3σ'],
        elements_subscript: ['', '3', 'v']
    },
    {
        question: 'Tris(bipyridine)ruthenium(II)',
        img: 'Tris(bipyridine)ruthenium(II)',
        answer: 'D',
        subscript: '3',
        elements: ['E', '2C', '3C'],
        elements_subscript: ['', '3', '2']
    },
    {
        question: 'Ethyne',
        img: 'Ethyne',
        answer: 'D',
        subscript: '∞h',
        elements: ['E', 'C', 'i', '∞σ', 'σ'],
        elements_subscript: ['', '∞', '', 'v', 'h']
    },
    {
        question: 'Hydrogen',
        img: 'hydrogen',
        answer: 'D',
        subscript: '∞h',
        elements: ['E', 'C', 'i', '∞σ', 'σ'],
        elements_subscript: ['', '∞', '', 'v', 'h']
    },
    {
        question: 'Benzene',
        img: 'benzene',
        answer: 'D',
        subscript: '6h',
        elements: ['E', 'C', '6C', 'i', 'σ', '6σ'],
        elements_subscript: ['', '6', '2', '', 'h', 'v']
    }
]

function RandomArray(list) {
    return [...list].sort(() => Math.random() - 0.5);
}

var Questions = RandomArray(BaseQuestions);
var OtherAnswer = [];
var UserAnswer = [];
var filteredanswer = [];
var correct = 0;
var N = 0;

for (let i = 0; i < BaseQuestions.length; i++) {
    let checksame = 0;
    for (let j = 0; j < OtherAnswer.length; j++) {
        if (OtherAnswer[j].answer == BaseQuestions[i].answer && OtherAnswer[j].subscript == BaseQuestions[i].subscript) {
            checksame = 1;
            break;
        }
    }
    if (checksame == 0) {
        OtherAnswer.push({
            answer: BaseQuestions[i].answer,
            subscript: BaseQuestions[i].subscript
        });
    };
}

function ShowQuestion() {
    $('.option').empty();
    var Options = ['A', 'B', 'C', 'D'].sort(() => Math.random() - 0.5);
    $('#question_text').text((N + 1) + '. ' + Questions[N].question)
    $('#question_img').attr('alt', Questions[N].question).attr('src', '../media/question/' + Questions[N].img + '.png');
    $('#' + Options[0]).text(Questions[N].answer).append($('<sub>').text(Questions[N].subscript));
    var sortedanswer = RandomArray(OtherAnswer);
    filteredanswer = [];
    for (let i = 0; i < sortedanswer.length; i++) {
        if (sortedanswer[i].answer != Questions[N].answer || sortedanswer[i].subscript != Questions[N].subscript) {
            filteredanswer.push({
                answer: sortedanswer[i].answer,
                subscript: sortedanswer[i].subscript
            });
        };
    };
    console.log(OtherAnswer);
    console.log(sortedanswer);
    console.log(filteredanswer);
    for (let i = 1; i <= 3; i++) {
        $('#' + Options[i]).text(filteredanswer[i].answer).append($('<sub>').text(filteredanswer[i].subscript));

    };

    $('.option').on('click', handleClick);

    function handleClick(event) {
        let $this = $(event.target);
        /*console.log($this.text())*/
        UserAnswer.push($this.text());
        /*console.log(N);
        console.log(UserAnswer);*/
        if (N < QN - 1) {
            N++;
            ShowQuestion();
        } else {
            correct = 0;
            ShowResult();
        }
        $('.option').off(handleClick);
    }
}

function ShowResult() {
    $('main').attr('id', 'Result').css('height', 'unset');
    $('main').empty();
    var frame = $('<div>').addClass('container');
    $('main').append(frame);
    var frame2 = $('<div>').addClass('row').css('border', 'solid');
    frame.append(frame2);
    var Results = [];
    for (let i = 0; i < QN; i++) {
        var result = $('<div>').addClass('col-12').addClass('col-sm-6').addClass('col-md-4').addClass('result');
        var result_detail = $('<div>').addClass('row').addClass('result_detail');
        result.append(result_detail);
        var result_no = $('<div>').addClass('col-12').addClass('col-sm-12').addClass('result_no');
        result_no.append($('<h1>').text(String(i + 1) + '.'));
        var result_img = $('<div>').addClass('col-10').addClass('col-sm-12').css('text-align', 'center').css('height', '30vh').css('display', 'flex').css('align-items', 'center').css('margin-bottom', '2vh');
        result_img.append($('<img>').addClass('result_img').attr('src', '../media/question/' + Questions[i].img + '.png'));
        var result_userans = $('<div>').addClass('col-6').addClass('col-sm-6').addClass('result_userans').css('text-align', 'center');
        if (UserAnswer[i] == Questions[i].answer + Questions[i].subscript) {
            result_userans.append($('<h1>').text(UserAnswer[i].charAt(0)).css('color', 'goldenrod').append($('<sub>').text(UserAnswer[i].charAt(1) + UserAnswer[i].charAt(2))));
            correct += 1;
        } else {
            result_userans.append($('<h1>').text(UserAnswer[i].charAt(0)).css('color', 'red').append($('<sub>').text(UserAnswer[i].charAt(1) + UserAnswer[i].charAt(2))));
        };
        var result_dataans = $('<div>').addClass('col-6').addClass('col-sm-6').addClass('result_dataans').css('text-align', 'center');
        result_dataans.append($('<h1>').text(Questions[i].answer).css('color', 'black').append($('<sub>').text(Questions[i].subscript)));
        if (Questions[i].elements.length == 1) {
            var solution = $('<div>').addClass('col-12').addClass('col-sm-12').addClass('solution').addClass('btn').addClass('btn-outline-dark').attr('type', 'button').attr('data-toggle', 'modal').attr('data-target', '#solution').attr('id', String(i)).text('Symmetry Element');
        } else {
            var solution = $('<div>').addClass('col-12').addClass('col-sm-12').addClass('solution').addClass('btn').addClass('btn-outline-dark').attr('type', 'button').attr('data-toggle', 'modal').attr('data-target', '#solution').attr('id', String(i)).text('Symmetry Elements');
        };
        result_detail.append(result_no).append(result_img).append(result_userans).append(result_dataans).append(solution);
        Results[i] = result;
    };
    var score = $('<div>').addClass('col-12').addClass('col-sm-12').addClass('score').append($('<h1>').text('Your Score: ' + correct + '/' + QN).css('text-align', 'center'));
    frame2.append(score).append(...Results);
    frame.append($('<div>').addClass('row').append($('<div>').addClass('col-12').addClass('col-sm-12').addClass('col-md-6').append($('<button>').addClass('btn').addClass('btn-danger').addClass('btn-lg').addClass('btn-block').attr('role', 'button').text('Try Again').attr('href', 'question.html').css('margin-top', '3vh'))).append($('<div>').addClass('col-12').addClass('col-sm-12').addClass('col-md-6').append($('<button>').addClass('btn').addClass('btn-secondary').addClass('btn-lg').addClass('btn-block').attr('role', 'button').text('Go Back To Homepage').attr('href', 'index.html').css('margin-top', '3vh'))));

    $('.solution').on('click', Click);

    function Click(event) {
        let $this = $(event.target);
        let num = $this.attr('id');
        $('.solution_label_1').empty().text(Questions[num].answer);
        $('.solution_label_sub').empty().text(Questions[num].subscript);
        $('.solution_label_2').empty().text('Group: ' + Questions[num].question);
        if (Questions[num].elements.length == 1) {
            $('.solution_text_1').empty().text('Symmetry element:');
            $('.solution_text_2').empty().append($('<div>').text(Questions[num].elements[0]).css('display', 'inline-block'));
        } else {
            $('.solution_text_1').empty().text('Symmetry elements:');
            $('.solution_text_2').empty();
            for (let i = 0; i < Questions[num].elements.length; i++) {
                if (i == 0) {
                    $('.solution_text_2').append($('<div>').text(Questions[num].elements[i]).css('display', 'inline-block')).append($('<sub>').text(Questions[num].elements_subscript[i]));
                } else {
                    $('.solution_text_2').append($('<div>').text(', ' + Questions[num].elements[i]).css('display', 'inline-block')).append($('<sub>').text(Questions[num].elements_subscript[i]));
                }
            }
        };
        $('.solution').off(Click);
    };
};

$(() => {
    ShowQuestion();
});