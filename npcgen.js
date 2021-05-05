function makeNPC() { /*insert array values*/
    var nameFirst = ["Anatoli", "Asher", "Benji", "Dominicus", "Ezra", "Florence", "Ilya", "Daniil", "Goro",
                    "Ira", "Julia", "Landon", "Titus", "Sylvia", "Lena", "Sebastian", "Petru", 
                    "Xerxes", "Vivek", "Junji", "Myles", "Ramesh", "Ulrik"];

    var nameLast = ["Vaughan", "Avery", "Villalobos", "Lim", "Reyna", "Cantrell", "Novak", "Hendrix",
                    "Archer", "Tang", "Martinez", "Mohamed", "Caddel", "Remington", "Fujita", "Nishiyama",
                    "Vargas", "Zygmunt", "Adrastos", "Vladimari", "Velasco", "Tillinghast"];
    
 
    var mechType = ["Controller", "Striker", "Artillery", "Defense", "Support"];

    /*first and last name from array*/
    var rand1 = Math.floor(Math.random() * nameFirst.length);
    var rand2 = Math.floor(Math.random() * nameLast.length);
    var rand3 = Math.floor(Math.random() * mechType.length);


    /*npc object*/
    var npc = {
        firstName: nameFirst[rand1],
        lastName: nameLast[rand2],
        mech: mechType[rand3]
        
    };

    return npc; 

}
   //log out NPC with console log + for in 
    function displayNPC(npc) {
        for (var prop in npc) {
        console.log(prop + ": " + npc[prop]);
}
        /*console.log("First Name: " + npc.nameFirst + " Last Name: " + npc.nameLast + " Mech Type: " + npc.mech);*/
    }

var newNPC = makeNPC();

displayNPC(newNPC);