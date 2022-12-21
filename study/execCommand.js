const buttons = document.querySelectorAll('button');
const btnForm = document.querySelector(".btns-form");
let showCode = true;

textField.document.designMode = "On";

btnForm.addEventListener("click", async(e) => {
    const cmd = e.target.closest('button').getAttribute('data-cmd');
    switch(cmd){
        case 'insertImage':
        case 'createLink':
            const url = await prompt('Enter Link Here: ', "");
            textField.document.execCommand(cmd, false, url);

            const atags = textField.document.querySelectorAll("a");
            atags.forEach((atag) => {
                atag.target = "_blank";
                atag.addEventListener("mouseover", (e) => {textField.document.designMode = "Off"; });
                atag.addEventListener("mouseout", (e) => {textField.document.designMode = "On"; });
            });
            break;
        case 'showCode':
            const textFieldBody = textField.document.querySelector("body"); 
            if(showCode){
                textFieldBody.textContent = textFieldBody.innerHTML;
                showCode = false;
            }
            else{
                textFieldBody.innerHTML = textFieldBody.textContent;
                showCode = true;
            }
            break;
        default:
            textField.document.execCommand(cmd, false, null);
            break;
    }
});
