/* Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
} */


function declareWinner(fighter1, fighter2, firstAttacker) {
    if (firstAttacker == fighter1.name) {
        let attacker = fighter1
        let defender = fighter2 - fighter1.damagePerAttack
        let attackerHealth = fighter1.health
        let defenderHealth = fighter2.health - fighter1.damagePerAttack

        console.log(`The attacker is ${fighter1} with ${attackerHealth} starting health and the defender is ${fighter2} with ${defenderHealth} health after the first attack`)
    } else if (firstAttacker == fighter2.name) {
        let attacker = fighter2
        let defender = fighter1 - fighter2.damagePerAttack
        let attackerHealth = fighter2.health
        let defenderHealth = fighter1.health - fighter2.damagePerAttack
        console.log(`The attacker is ${fighter2} with ${attackerHealth} starting health and the defender is ${fighter1} with ${defenderHealth} health after the first attack`)
    }

    for (let i = attackerHealth; i <= 0; i - defender.damagePerAttack){
        if (i < )
    }
}