class BowlingGame{
    constructor(){
        this.rolls = []
    }

    roll(pins){
        this.rolls.push(pins)
    }

    get score(){
        let score = 0
        let rollIndex = 0

        for(let frameIndex = 0; frameIndex < 10; frameIndex++){
            const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1]

            if(this.isStrike(rollIndex)){
                score =+ this.strikeBonus(rollIndex)
                rollIndex++
                continue
            }

            if(this.isSpare(frameScore)){
                score =+ this.spareBonus(rollIndex)

            }
            else{
                score = score + frameScore
            }

            rollIndex = rollIndex + 2
        }
        return score
    }

    isSpare(frameScore){
        return frameScore === 10 
    }

    spareBonus(rollIndex){
        return 10 + this.rolls[rollIndex + 2]
    }

    isStrike(rollIndex){
        return this.rolls[rollIndex] === 10
    }

    strikeBonus(rollIndex){
        return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]
    }
}