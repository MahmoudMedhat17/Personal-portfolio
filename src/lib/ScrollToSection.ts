export const ScrollToSection = (id:string)=>{
    const sectionId = document.getElementById(id);
    if(sectionId){
        window.scrollTo({top:sectionId.offsetTop,behavior:"smooth"});
    }
};
