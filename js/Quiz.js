class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta
    question.hide();
    contestant.hide();
    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario

    if(gameState === 1){

      text("LOS RESULTADOS: ",400,400
      );

    }

    //llama aquí a getContestantInfo( )

    play.getContestantInfo()
    //escribe la condición para comprobar si contestantInfor no está indefinido 

    if(allContestants !== undefined){

      fill("blue");
      textSize(20);
      text("EL CONCURSANTE GANADOR SERA DE COLOR VERDE POR EL RESTO DE SU VIDA",130,230);

    }
    //escribe el código para resaltar al concursante que respondió correctamente
    for(var prl in allContestants){

      var correctAns = "2";
      if(correctAns === allContestants[prl].answer){

        fill("green");

      }else{

        fill("red");

      }

    }
    
  }

}
