// declaring variables, not wars -SudhanshuMishra
var gene1;
var gene2;
var gene3;
var gene4;
var gene5;
var agent;
var index;
var partner1;
var partner2;

organisms = [] //starting population will be 100



function AgentFit(fitness) {

	this.fitness = 0;

  this.genes = "something"

}

var target_string = ("Hello")
var fitness_letters = ["H",'e','l','l','o']

var chars = ["q","w","e","r","t","y","u","i","o","p","Q","W","E","R","T","Y","U","I","O","P","a","s","d","f","g","h","j","k",'l','A','S','D','F','G','H','J','K','L','z','x','c','v','b','n','m','Z','X','C','V','B','N','M']



function breed(){

	organisms.sort((a, b) => (a.fitness > b.fitness) ? -1 : 1)
  var orgLength = organisms.length

	console.log("\n\n\n\nSorted list:\n\n")

	index = -1;

	 for ( i = 0; i < orgLength; i++) {

		 index++;
		 console.log("\n" + organisms[index].genes + "\n")
		 console.log(organisms[index].fitness)

	 }
	 console.log(orgLength)
	
	
	
	

	var best50 = Math.trunc(orgLength / 2) -1;
	console.log(best50);
	
	let pick_agent = Math.floor(Math.random() * best50);
	partner1 = organisms[pick_agent];

	let pick_agent = Math.floor(Math.random() * best50);
	partner2 = organisms[pick_agent];


}
//checks the fitness of any agent.
function checkFitness(){

  if(gene1 === fitness_letters[0]){
    
		agent.fitness += 1;
    

  } else{

		agent.fitness -= 0;
	}
	
	if(gene2 === fitness_letters[1]){
  	
		agent.fitness += 1;
    

  } else{

		agent.fitness -= 0;
	}


	if(gene3 === fitness_letters[2]){
  	
		agent.fitness += 1;
    

  } else{

		agent.fitness -= 0;
	}

	if(gene4 === fitness_letters[3]){
  	
		agent.fitness += 1;
    

  } else{

		agent.fitness -= 0;
	}
	
	if(gene5 === fitness_letters[4]){
  	
		agent.fitness += 1;
    

  } else{

		agent.fitness -= 0;
	}

	if(gene1 in fitness_letters){

		agent.fitness += 2;

	} else{

		agent.fitness -= 0.5;
	}

	if(gene2 in fitness_letters){

		agent.fitness += 2;

	} else{

		agent.fitness -= 0.5;
	}

	if(gene3 in fitness_letters){

		agent.fitness += 2;

	} else{

		agent.fitness -= 0.5;
	}

	if(gene4 in fitness_letters){

		agent.fitness += 2;

	} else{

		agent.fitness -= 0.5;
	}

	if(gene5 in fitness_letters){

		agent.fitness += 2;

	} else{

		agent.fitness -= 0.5;
	}
	

 

}

function startPop(){
  
      
   for ( i = 0; i < 100; i++) { // loop to make 100 organisms
     chars.sort(function() {return 0.5 - Math.random()}) //shuffles the array 
      gene1 = chars[0] // grabs the first item of array
      gene2 = chars[1] // grabs second item
      gene3 = chars[2] // third item
      gene4 = chars[3] // fourth item
      gene5 = chars[4] // fifth item

			agent = new AgentFit(); //creates a new agent

      agent.genes = (gene1 + gene2 + gene3 + gene4 + gene5); // sets the genes of the agent

      checkFitness(); //runs the fitness function to set the fitness of the agent 
			
			
     //logs all the agents attributes in the console
     organisms.push(agent);
     console.log("\nAgent:\n");
     console.log(agent.genes);

     console.log("\nFitness:\n");
     console.log(agent.fitness);
  }
	breed();
  
  
}

startPop();  //calls the starting population function.


//simple loop to update the frontend
function update(){
  document.getElementById("gen").value = organisms[0].genes;
	
  
  window.requestAnimationFrame(update)
};

window.requestAnimationFrame(update)
