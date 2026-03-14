export function getRank(streak: number) {
  if (streak >= 150) {
    return { title: "Samurai 🏯", message: "Legendary discipline!" }
  }

  if (streak >= 100) {
    return { title: "Master 🧠", message: "You have mastered consistency!" }
  }

  if (streak >= 60) {
    return { title: "Ninja 🥷", message: "Silent but powerful progress." }
  }

  if (streak >= 30) {
    return { title: "Warrior ⚔️", message: "Your learning battle is strong!" }
  }

  if (streak >= 15) {
    return { title: "Scholar 🎓", message: "Knowledge is your weapon." }
  }

  if (streak >= 7) {
    return { title: "Learner 📚", message: "A strong habit is forming." }
  }

  return { title: "Beginner 🌱", message: "Every journey begins with a step." }
}
export function getNextRankProgress(streak:number){

  if(streak < 7) return {next:"Learner 📚", remaining:7-streak, goal:7}
  if(streak < 15) return {next:"Scholar 🎓", remaining:15-streak, goal:15}
  if(streak < 30) return {next:"Warrior ⚔️", remaining:30-streak, goal:30}
  if(streak < 60) return {next:"Ninja 🥷", remaining:60-streak, goal:60}
  if(streak < 100) return {next:"Master 🧠", remaining:100-streak, goal:100}
  if(streak < 150) return {next:"Samurai 🏯", remaining:150-streak, goal:150}

  return {next:"Legend 👑", remaining:0, goal:150}
}