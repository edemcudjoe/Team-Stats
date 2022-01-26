team = {
    _players: [
      {
        firstName: 'James',
        lastName: 'Harden',
        age: 29
      },
      {
        firstName: 'Kevin',
        lastName: 'Durant',
        age: 30
      },
      {
        firstName: 'Lebron',
        lastName: 'James',
        age: 34
      }
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 46,
        opponentPoints: 32
      },
      {
        opponent: 'Raptors',
        teamPoints: 52,
        opponentPoints: 48
      },
      {
        opponent: 'Bulls',
        teamPoints: 66,
        opponentPoints: 51
      }
    ],
    
    get players() {
      
    },
  
    get games() {
  
    },
  
    addPlayer(firstName, lastName, age) {
      player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      this._players.push(player);
    },
  
    addGame(opponent, teamPoints, opponentPoints) {
      game = {
        opponent,
        teamPoints,
        opponentPoints,
      }
      this._games.push(game);
    } 
  }
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team._players);
  
  team.addGame('Heats', 56, 33);
  team.addGame('69ers', 77, 54);
  team.addGame('Knicks', 71, 69);
  console.log(team._games);
  