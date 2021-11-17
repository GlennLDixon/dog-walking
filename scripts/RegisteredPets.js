import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if(itemClicked.id.startsWith("pet")) {
        const [,petID] = itemClicked.id.split('--')

        for (const pet of pets ) {
            for (const walker of walkers) {
                if(pet.id === parseInt(petID) && pet.walkerId === walker.id) {
                    window.alert(`${pet.name} is being walked by ${walker.name}`)
                }
            }
        }
    }
})

const pets = getPets()
const walkers = getWalkers()


export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

