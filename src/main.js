import '../styles/components/header.css' 
import '../styles/components/about.css'
import '../styles/components/cards.css'
import '../styles/components/hero.css'
import '../styles/style.css'
import '../styles/util.css'


const modal = document.querySelector('dialog')
const tag = document.querySelector('tag')

if (tag&&modal){
    tag.addEventListener("click",()=>{
        modal.showModal()
    });
}
