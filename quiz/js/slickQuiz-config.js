// Configure aqui o texto e as perguntas do seu questionário
//</br><img src=https://media.giphy.com/media/aMUHfcjeOY42Q/giphy.gif style=width:100%;height:100%;display: block;>

var quizJSON = {
    "info": {
        "r" : "requests.get(location_url)",
        "texto" : "r.content.decode('utf8')",
        "$j_encoded" : "json_encode(utf8_encode($string))", 
        "name":    "Teste seu conhecimento!",
        "main":    "<p>Responda as questões abaixo!</p>",
        "results": "<h5>Observação:</h5><p>Uma antiga prática jesuítica diz que “a repetição, com correção, até a exaustão, leva a perfeição!”</p>",
        "level1":  "Você foi nota 10!",
        "level2":  "Só mais um pouco, nota 09!",
        "level3":  "Está melhorando, mas é ainda um amador",
        "level4":  "Pouco conhecimento",
        "level5":  "Volte para a escola, criança..." 
    },
    "questions": [
        { // Question 1 
            "q": "Já parou para pensar no assunto? Alguma vez refletiu se os seus pensamentos, ideias e sentimentos estão em harmonia? Sabe a diferença entre saúde mental e doença ou transtorno mental?</br></br><img src=quiz/images/3d-render-medico-imagem-macho-figura-cerebro-destacado-min.jpg style=width:50%;height:50%;display: block;></br><a target=blank href=https://br.freepik.com/fotos-gratis/3d-render-medico-imagem-macho-figura-cerebro-destacado_1138374.htm#query=mental&position=3&from_view=search&track=sph><img src=images/freepik.png style=width:5%;height:5%;display: block;></a>",
            "a": [
                {"option": "Não existe diferença entre saúde mental e doença ou transtorno mental. ",   "correct": false},
                {"option": "A diferença é mínima.",                                                     "correct": false},
                {"option": "O primeiro refere-se à saúde e, os outros, à ausência dela.",                "correct": true},
                {"option": "Esse tema é irrelevante para os DEVs.",                                      "correct": false} 
            ],
            "correct": "<p><span><i style=font-size:1.5em;>☺</i>Muito Bem! </span> Em geral, os termos causam confusão. Mas basta lê-los com cuidado, pois são autoexplicativos. O primeiro refere-se à saúde e, os outros, à ausência dela. Não existe, porém, uma definição oficial para o conceito de saúde mental, de acordo com a Organização Mundial de Saúde (OMS). <a target=blank href=https://medcentervitalbrazil.com.br/blog/geral/e-a-saude-mental-vai-como_14-06-2023><t>Link do texto:<t/><a/></p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span> Ao final do Quiz, clique em <em>Reiniciar</em>, e tente novamente.</p>" // sem vírgula aqui
        },

        { // Question 2
            "q": "Complete a lacuna: Por ano, ____________ são gastos com saúde da mente. No mundo, é gasto o equivalente a _____ o PIB brasileiro com problemas relacionados à saúde mental.</br></br><img src=https://media.giphy.com/media/bi6RQ5x3tqoSI/giphy.gif style=width:50%;height:50%;display: block;>",
            "a": [
                {"option": "US$ 1 trilhões, 3x",                       "correct": false},
                {"option": "US$ 2 trilhões, 1x",                       "correct": false},
                {"option": "US$ 12.4 trilhões, 6x",                    "correct": true},
                {"option": "US$ 3 trilhões, 6x",                       "correct": false} 
            ],
            "correct": "<p><span><i style=font-size:1.5em;>☺</i>Muito Bem! </span> Uma quantidade gigantesca de pacientes. <a target=blank href=https://www.bemdoestar.org/?gclid=EAIaIQobChMIhJH74djugQMVm15IAB3olwJeEAAYAiAAEgIL6fD_BwE<t>Link do texto:<t/><a/></p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span> Ao final do Quiz, clique em <em>Reiniciar</em>, e tente novamente.</p>" // sem vírgula aqui
        },

        { // Question 3
            "q": "1 em cada 3 pessoas sofre de _____________ no mundo. O Brasil é o ________________ em casos de ansiedade e líder em depressão na América Latina. Dados da Organização Mundial da Saúde - OMS.</br><img src=quiz/images/mulher-jovem-lidando-com-a-ansiedade-min.jpg style=width:50%;height:50%;display: block;></br><a target=blank href=https://br.freepik.com/fotos-gratis/mulher-jovem-lidando-com-a-ansiedade_29310054.htm#query=ansiedade&position=11&from_view=search&track=sph><img src=images/freepik.png style=width:5%;height:5%;display: block;></a>",
            "a": [
                {"option": "tristeza, último país",                       "correct": false},
                {"option": "ansiedade, campeão mundial",                  "correct": true},
                {"option": "todas as alternativas são falsas",            "correct": false},
                {"option": "apatia, país com menos",                      "correct": false} 
            ],                   
            "correct": "<p><span><span><i style=font-size:1.5em;>☺</i>Muito Bem!</span><a target=blank href=https://www.bemdoestar.org/?gclid=EAIaIQobChMIhJH74djugQMVm15IAB3olwJeEAAYAiAAEgIL6fD_BwE<t>Link do texto:<t/><a/></p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span> Ao final do Quiz, clique em <em>Reiniciar</em>, e tente novamente.</p>" // sem vírgula aqui
        },

        { // Question 4 
            "q": "Selecione a alternativa correta que completa a frase: De onde vem a fama do Google? A ideia que se tem é de que, por lá, todos têm o emprego dos sonhos e que o _______________________ mais parece um playground do futuro.</br><img src=images/person-on-a-bike-outside-a-google-office-right-google-sign-in-lounge.jpg style=width:50%;height:50%;display: block;><a target=blank href=https://www.narcity.com/toronto/google-is-hiring-so-many-jobs-in-ontario-the-benefits-are-out-of-this-world></br><t>Link da imagem.</t></a>",
            "a": [
                {"option": "Todas as alternativas são falsas",               "correct": false},
                {"option": "bem estar",                                      "correct": false},
                {"option": "PRÉDIO",                                         "correct": false},
                {"option": "ambiente de trabalho",                           "correct": true} 
            ],
            "correct": "<p><span><span><i style=font-size:1.5em;>☺</i>Muito Bem! </span><a target=blank href=https://blog.runrun.it/ambiente_de_trabalho_do_google/#:~:text=De%20onde%20vem%20a%20fama%20do%20Google%3F%20A%20ideia%20que%20se%20tem%20%C3%A9%20de%20que%2C%20por%20l%C3%A1%2C%20todos%20t%C3%AAm%20o%20emprego%20dos%20sonhos%20e%20que%20o%20ambiente<t>Link do texto<t/><a/></p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span> Ao final do Quiz, clique em <em>Reiniciar</em>, e tente novamente.</p>" // sem vírgula aqui
        },

        { // Question 5
            "q": "A Saúde Mental de uma pessoa está relacionada à forma como ela reage às exigências da vida e ao modo como harmoniza seus ________________________________.</br><img src=quiz/images/saude_mental_parana.jpg style=width:25%;height:25%;display: block;></br><a target=blank href=https://www.saude.pr.gov.br/sites/default/arquivos_restritos/files/styles/escala_1140_largura_/public/imagem/2021-09/613bb33f24a1f-logo-03.webp?itok=V61z0Af0><t>Link da imagem<t/></a>",
            "a": [
                {"option": "desejos, capacidades, ambições, ideias e emoções",    "correct": true},
                {"option": "hábitos no dia-a-dia",                                "correct": false},
                {"option": "pensamentos íntimos",                                 "correct": false},
                {"option": "todas as alternativas falsas",                        "correct": false} 
            ],
            "correct": "<p><span><span><i style=font-size:1.5em;>☺</i>Muito Bem! Continue assim.</span><a target=blank href=https://www.saude.pr.gov.br/Pagina/Saude-Mental#:~:text=A%20Sa%C3%BAde%20Mental%20de%20uma%20pessoa%20est%C3%A1%20relacionada%20%C3%A0%20forma%20como%20ela%20reage%20%C3%A0s%20exig%C3%AAncias%20da%20vida%20e%20ao%20modo%20como%20harmoniza%20seus%20desejos%2C%20capacidades%2C%20ambi%C3%A7%C3%B5es%2C%20ideias%20e%20emo%C3%A7%C3%B5es><t>Link do texto<t/></a></p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span> Ao final do Quiz, clique em <em>Reiniciar</em>, e tente novamente.</p>" // sem vírgula aqui
        },

         { // Question 06
           "q": "AGUARDANDO AVALIAÇÃO, CORREÇÃO OU APROVAÇÃO DO PROFESSOR.",
           "a": [
                {"option": "AGUARDANDO AVALIAÇÃO, CORREÇÃO OU APROVAÇÃO DO PROFESSOR",        "correct": true},
                {"option": "AGUARDANDO AVALIAÇÃO, CORREÇÃO OU APROVAÇÃO DO PROFESSOR",        "correct": false}
           ],
            "correct": "<p><span><span><i style=font-size:1.5em;>☺</i></span></p>",
            "incorrect": "<p><span><i style=font-size:1.5em;>!►</i> Alternativa Errada! </span></p>" // sem vírgula aqui
         }
    ]
};

 
