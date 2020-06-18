var allRewards = [];
var allEnemies = [];
var allWinConditions = [];
var LevelNumber = 1;
var CurrentMap;
var CurrentEnemyTotal;
var allowDraw = false;
    function changeMap(){
        switch (LevelNumber) {
            case 1: var level1Map = [
                            
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 16],
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],


            ];
                CurrentEnemyTotal = 2;
                CurrentMap = level1Map
                allWinConditions.push(new winCondition(1300,680, 63,63))
               // allWinConditions.push(new winCondition(63,100, 63,63))
                allRewards.push(new Reward(600,200,62,62))
                allRewards.push(new Reward(96,191, 62, 62))
                allRewards.push(new Reward(1286,373, 62, 62))
                allRewards.push(new Reward(300,700, 62, 62))
                allRewards.push(new Reward(443,373, 62, 62))
                allEnemies.push(new Enemy(800,230,20, 20));
                allEnemies.push(new Enemy(1006,740,20, 20));
                allowDraw = true;
                Character.respawn()
                drawLevel();
                Character.draw();
                break;
            case 2: var level2Map = [
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 16, 16, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 16, 16, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 16, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 16, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 16, 00, 16],
            [16, 00, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 00, 16],
            [16, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 16, 16, 16, 00, 00, 00, 00, 00, 00, 16, 16, 16, 00, 16],
            [16, 16, 16, 16, 16, 16, 00, 00, 16, 00, 00, 00, 16, 16, 16, 16, 16, 00, 00, 00, 00, 16, 16, 16, 16, 00, 16],
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            ];
                allowDraw = false
                CurrentEnemyTotal = 3;
                CurrentMap = level2Map
                Character.respawn()
                allRewards = []
                allEnemies = []
                allWinConditions = []
               // allWinConditions.push(new winCondition(63,100,63,63))
                allWinConditions.push(new winCondition(1575,885,63,63))
                allRewards.push(new Reward(100,700, 63, 63));
                allRewards.push(new Reward(451, 500, 63, 63))
                allRewards.push(new Reward(500, 800, 63, 63))
                allRewards.push(new Reward(770, 200, 63, 63))
                allRewards.push(new Reward(770, 700, 63, 63))
                allEnemies.push(new Enemy(650,930, 20, 20));
                allEnemies.push(new Enemy(900,300, 20, 20));
                allEnemies.push(new Enemy(1200,930, 20, 20));
                allowDraw = true
                drawLevel();
                Character.draw();
                break;
                case 3: var level3Map = [
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 00, 16, 16, 00, 16, 16, 00, 16, 16, 00, 16, 16, 00, 00, 00, 00, 00, 00, 00, 16, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 16, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 16, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 16, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 16, 00, 16, 00, 16, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 16, 16, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 16, 00, 16, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 16, 16, 16, 00, 00, 00, 00, 00, 00, 16, 16, 00, 00, 00, 00, 00, 00, 16, 16, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 16, 16, 16, 00, 00, 00, 00, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
        ];
            CurrentMap = level3Map
            Character.respawn()
            allRewards = []
            allEnemies = []
            allWinConditions = []
            allWinConditions.push(new winCondition(40*63, 15*63, 63, 63))
            allRewards.push(new Reward(63*40, 315, 63, 63),new Reward(1629, 315, 63, 63),new Reward(1500, 15*63, 63, 63),new Reward(16*63, 14*63, 63, 63));
            allEnemies.push(  new Enemy(567, 952, 63, 63), new Enemy(693, 952, 63, 63),new Enemy(1500, 11*63, 63, 63),new Enemy(1626, 11*63, 63, 63),new Enemy(1752, 11*63, 63, 63),new Enemy(17*63, 14*63 + 20, 40, 40));
            drawLevel();
            Character.draw();
            break;
                case 4: var level4Map = [
                
                [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
                [16, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 00, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 00, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 16, 00, 00, 00, 00, 00, 16, 00, 00, 16, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 16, 16, 16, 00, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 16, 00, 16, 16, 16, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 16, 00, 00, 16, 16, 16, 16, 00, 00, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 16, 00, 16, 16, 16, 00, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 00, 00, 16, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16],
                [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            ];
                allowDraw = false
                CurrentEnemyTotal =7;
                CurrentMap = level4Map
                Character.respawn()
                allRewards = []
                allEnemies = []
                allWinConditions = []
                allWinConditions.push(new winCondition(3000,950, 63, 63))
                allRewards.push(new Reward(600,63, 63, 63));
                allRewards.push(new Reward (1200,63, 63, 63))
                allRewards.push(new Reward (1500,63, 63, 63))
                allRewards.push(new Reward (1700,63, 63, 63))
                allRewards.push(new Reward (1700,570, 63, 63))
                allRewards.push(new Reward (2100,200, 63, 63))
                allRewards.push(new Reward (3000,200, 63, 63))
                allRewards.push(new Reward (2500,500, 63, 63))
                allRewards.push(new Reward (1000,350, 63, 63))
                allRewards.push(new Reward (500,500, 63, 63))
                allRewards.push(new Reward (63,500, 63, 63))
                allRewards.push(new Reward (63,900, 63, 63))
                allRewards.push(new Reward (500,800, 63, 63))
                allRewards.push(new Reward (1000,900, 63, 63))
                allRewards.push(new Reward (2700,910, 63, 63))
                allRewards.push(new Reward (2300,880, 63, 63))
                allRewards.push(new Reward (2900,950, 63, 63))
                allRewards.push(new Reward (3000,950, 63, 63))
                allRewards.push(new Reward (2400,970, 63, 63))
                allEnemies.push(new Enemy (750, 240, 20,20))
                allEnemies.push(new Enemy (800, 610, 20,20))
                allEnemies.push(new Enemy (1000, 240, 20,20))
                allEnemies.push(new Enemy (2500, 240, 20,20))
                allEnemies.push(new Enemy (2700, 620, 20,20))
                allEnemies.push(new Enemy (2100, 620, 20,20))
                allEnemies.push(new Enemy (1450, 550, 20,20))
                allEnemies.push(new Enemy (350, 1000, 20,20))
                allEnemies.push(new Enemy (675, 1000, 20,20))
                allEnemies.push(new Enemy (1000, 990, 20,20))
                allEnemies.push(new Enemy (1200, 990, 20,20))
                allEnemies.push(new Enemy (1400, 990, 20,20))
                allEnemies.push(new Enemy (1550, 1050, 20,20))
                allEnemies.push(new Enemy (2050, 1050, 20,20))
                allowDraw = true;
                drawLevel();
                Character.draw();
                break;
            
        }
    }